import{A as w}from"./AppLayout.0a48a2f0.js";import F from"./DeleteUserForm.da769063.js";import{J as y}from"./SectionBorder.842afc98.js";import $ from"./LogoutOtherBrowserSessionsForm.5e26bb90.js";import k from"./TwoFactorAuthenticationForm.67cc7994.js";import v from"./UpdatePasswordForm.27052291.js";import P from"./UpdateProfileInformationForm.a2338b96.js";import b from"./UpdateNotificationPreferencesForm.971d4f9c.js";import{_ as j,z as t,o as s,c as B,w as m,a as n,t as U,b as o,d as a,e as p,F as x}from"./app.9fb1098e.js";import"./ActionSection.e77ce911.js";import"./SectionTitle.0bebf4ff.js";import"./DialogModal.c0b59d62.js";import"./Modal.be1957e2.js";import"./DangerButton.491d0d87.js";import"./Input.be5c7101.js";import"./InputError.fb00105e.js";import"./SecondaryButton.3055ace6.js";import"./ActionMessage.ce9f4c23.js";import"./Button.01893ce8.js";import"./FormSection.afa012a2.js";import"./XInput.8b04715f.js";import"./PasswordStrengthMeter.9f15746a.js";import"./Label.bb99c994.js";import"./index.es.d8b1b6c6.js";import"./XCheckbox.a95db0de.js";import"./XSelect.c780e817.js";import"./XTextarea.21d1c3eb.js";const A={components:{UpdateNotificationPreferencesForm:b,AppLayout:w,DeleteUserForm:F,JetSectionBorder:y,LogoutOtherBrowserSessionsForm:$,TwoFactorAuthenticationForm:k,UpdatePasswordForm:v,UpdateProfileInformationForm:P},props:["sessions"]},S={class:"font-semibold text-xl text-gray-800 leading-tight"},N={class:"max-w-7xl mx-auto py-10 px-2 sm:px-6 lg:px-8"},C={key:0},D={key:1},V={key:2};function I(e,J,i,L,T,z){const c=t("app-head"),_=t("update-profile-information-form"),r=t("jet-section-border"),l=t("update-notification-preferences-form"),f=t("update-password-form"),d=t("two-factor-authentication-form"),u=t("logout-other-browser-sessions-form"),h=t("delete-user-form"),g=t("app-layout");return s(),B(g,null,{header:m(()=>[n("h2",S,U(e.__("Profile")),1)]),default:m(()=>[o(c,{title:e.__("Your Profile Settings")},null,8,["title"]),n("div",null,[n("div",N,[e.$page.props.jetstream.canUpdateProfileInformation?(s(),a("div",C,[o(_,{user:e.$page.props.user},null,8,["user"]),o(r)])):p("",!0),n("div",null,[o(l,{user:e.$page.props.user},null,8,["user"]),o(r)]),e.$page.props.jetstream.canUpdatePassword?(s(),a("div",D,[o(f,{class:"mt-10 sm:mt-0"}),o(r)])):p("",!0),e.$page.props.jetstream.canManageTwoFactorAuthentication?(s(),a("div",V,[o(d,{class:"mt-10 sm:mt-0"}),o(r)])):p("",!0),o(u,{sessions:i.sessions,class:"mt-10 sm:mt-0"},null,8,["sessions"]),e.$page.props.jetstream.hasAccountDeletionFeatures?(s(),a(x,{key:3},[o(r),o(h,{class:"mt-10 sm:mt-0"})],64)):p("",!0)])])]),_:1})}const uo=j(A,[["render",I]]);export{uo as default};
