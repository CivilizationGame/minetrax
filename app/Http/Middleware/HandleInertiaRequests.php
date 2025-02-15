<?php

namespace App\Http\Middleware;

use App\Enums\ServerType;
use App\Models\CustomPage;
use App\Models\Permission;
use App\Models\Role;
use App\Models\Server;
use App\Settings\GeneralSettings;
use Illuminate\Http\Request;
use Inertia\Middleware;
use Route;
use Storage;

class HandleInertiaRequests extends Middleware
{
    /**
     * The root template that's loaded on the first page visit.
     *
     * @see https://inertiajs.com/server-side-setup#root-template
     * @var string
     */
    protected $rootView = 'app';

    /**
     * Determines the current asset version.
     *
     * @see https://inertiajs.com/asset-versioning
     * @param  \Illuminate\Http\Request  $request
     * @return string|null
     */
    public function version(Request $request)
    {
        return parent::version($request);
    }

    /**
     * Defines the props that are shared by default.
     *
     * @see https://inertiajs.com/shared-data
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function share(Request $request)
    {
        return array_merge(parent::share($request), [
            'appName' => config('app.name'),
            'locale' => fn () => app()->getLocale(),
            'toast' => fn () => $request->session()->get('toast'),
            'popstate' => \Str::uuid(),
            'permissions' => function () use ($request) {
                if (!$request->user()) return [];

                if ($request->user()->hasRole(Role::SUPER_ADMIN_ROLE_NAME)) {
                    return Permission::all()->pluck('name');
                }
                return $request->user()->getAllPermissions()->pluck('name');
            },
            'defaultQueryServer' => function () {
                $defaultQueryServer = Server::where('type', ServerType::Bungee)->select('hostname', 'id')->latest()->first();
                if (!$defaultQueryServer) {
                    $defaultQueryServer = Server::select('id', 'hostname')->first();
                }
                return $defaultQueryServer;
            },
            'generalSettings' => fn (GeneralSettings $generalSettings) => $generalSettings->toArray(),
            'customPageList' => CustomPage::visible()->navbar()->select(['id', 'title', 'path', 'is_in_navbar', 'is_visible'])->get(),
            'isImpersonating' => $request->user() && $request->user()->isImpersonating(),
            'enabledSocialAuths' => function () {
                $enabledSocialLogins = [];
                $enabledSocialLogins['github'] = config('services.github.oauth_enabled');
                $enabledSocialLogins['google'] = config('services.google.oauth_enabled');
                $enabledSocialLogins['facebook'] = config('services.facebook.oauth_enabled');
                $enabledSocialLogins['twitter'] = config('services.twitter.oauth_enabled');
                $enabledSocialLogins['discord'] = config('services.discord.oauth_enabled');
                return $enabledSocialLogins;
            },

            "webVersion" => config("app.version"),
            "hasRegistrationFeature" => Route::has("register"),
            "showPoweredBy" => config("minetrax.show_powered_by"),
            "showHomeButton" => config("minetrax.show_home_button"),
        ]);
    }
}
