export const DashboardSvg = (
  props: React.JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>
) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={20}
    height={20}
    fill="none"
    {...props}
  >
    <path
      stroke={props.color}
      strokeWidth={1.5}
      d="M8 19H3a2 2 0 0 1-2-2v-6.703a2 2 0 0 1 .548-1.376l7-7.388a2 2 0 0 1 2.904 0l7 7.388A2 2 0 0 1 19 10.297V17a2 2 0 0 1-2 2h-5m-4 0v-5.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5V19m-4 0h4"
    />
  </svg>
);

export const MasterListSvg = (
  props: React.JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>
) => (
  <svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M21.4189 15.7321C21.4189 19.3101 19.3099 21.4191 15.7319 21.4191H7.94988C4.36288 21.4191 2.24988 19.3101 2.24988 15.7321V7.93212C2.24988 4.35912 3.56388 2.25012 7.14288 2.25012H9.14288C9.86088 2.25112 10.5369 2.58812 10.9669 3.16312L11.8799 4.37712C12.3119 4.95112 12.9879 5.28912 13.7059 5.29012H16.5359C20.1229 5.29012 21.4469 7.11612 21.4469 10.7671L21.4189 15.7321Z"
      stroke={props.color}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M7.48096 14.463H16.216"
      stroke={props.color}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const PensionerListSvg = (
  props: React.JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>
) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <path
      fill={props.color}
      d="M11.023 17.855H9.649c-.092 0-.153.06-.153.152s.061.153.153.153h1.374c.091 0 .153-.061.153-.152a.164.164 0 0 0-.153-.153Z"
    />
    <path
      fill={props.color}
      d="M19.677 2.846a2.365 2.365 0 0 0-1.684-.697H6.566c-.636 0-1.234.247-1.684.697a2.365 2.365 0 0 0-.697 1.684v15.238c0 .636.247 1.234.697 1.684.45.45 1.048.697 1.684.697h11.429c.636 0 1.234-.248 1.684-.697.45-.45.697-1.048.697-1.684V4.53a2.37 2.37 0 0 0-.698-1.684Zm-.254 16.923a1.43 1.43 0 0 1-1.428 1.428H6.565a1.43 1.43 0 0 1-1.428-1.428V4.53c0-.788.64-1.428 1.429-1.428h11.429c.787 0 1.428.64 1.428 1.428V19.77Z"
    />
    <path
      fill={props.color}
      d="M10.039 10.86 8.47 12.428l-.615-.615a.477.477 0 0 0-.673.673l.952.953a.475.475 0 0 0 .675 0l1.905-1.905a.477.477 0 1 0-.676-.674ZM10.039 15.621 8.47 17.189l-.615-.615a.476.476 0 0 0-.673.673l.952.953a.475.475 0 0 0 .675 0l1.905-1.905a.477.477 0 1 0-.676-.674ZM10.039 6.098 8.47 7.666l-.615-.616a.477.477 0 0 0-.673.674l.952.952a.475.475 0 0 0 .675 0l1.905-1.905a.476.476 0 1 0-.676-.673ZM17.043 11.673H12.28a.476.476 0 1 0 0 .952h4.763a.476.476 0 1 0 0-.952ZM17.043 17.387H12.28a.476.476 0 1 0 0 .952h4.763a.476.476 0 1 0 0-.952ZM17.043 6.91H12.28a.476.476 0 1 0 0 .952h4.763a.476.476 0 1 0 0-.951ZM11.023 18.923H9.649c-.092 0-.153.061-.153.153 0 .091.061.153.153.153h1.374c.091 0 .153-.061.153-.153a.153.153 0 0 0-.153-.153Z"
    />
  </svg>
);

export const ReportSvg = (
  props: React.JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>
) => (
  <svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M16.4445 20.8889V12.8039C16.4445 12.5008 16.7022 12.2551 17.0001 12.2551C17.3068 12.2551 17.5556 12.4946 17.5556 12.8039V20.8889H18.675C19.889 20.8889 20.889 19.8918 20.889 18.6749V5.32498C20.889 4.11098 19.8919 3.11099 18.675 3.11099H5.32512C4.11113 3.11099 3.11113 4.10806 3.11113 5.32498V18.6749C3.11113 19.8889 4.1082 20.8889 5.32512 20.8889H6.44454V15.5903C6.44454 15.2776 6.70221 15.0239 7.00007 15.0239C7.30685 15.0239 7.5556 15.2703 7.5556 15.5903V20.8889H9.77784V10.0379C9.77784 9.73333 10.0355 9.48652 10.3334 9.48652C10.6403 9.48652 10.889 9.72424 10.889 10.0379V20.8889H13.1111V5.88611C13.1111 5.58087 13.3689 5.33337 13.6668 5.33337C13.9736 5.33337 14.2223 5.58113 14.2223 5.88611V20.8889H16.4445ZM2 5.32505C2 3.4887 3.5032 2 5.32505 2H18.675C20.5113 2 22 3.5032 22 5.32505V18.675C22 20.5113 20.4968 22 18.675 22H5.32505C3.4887 22 2 20.4968 2 18.675V5.32505Z"
      fill={props.color}
    />
  </svg>
);

export const UsersSvg = (
  props: React.JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>
) => (
  <svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M16 21V19C16 17.9391 15.5786 16.9217 14.8284 16.1716C14.0783 15.4214 13.0609 15 12 15H5C3.93913 15 2.92172 15.4214 2.17157 16.1716C1.42143 16.9217 1 17.9391 1 19V21"
      stroke={props.color}
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M8.5 11C10.7091 11 12.5 9.20914 12.5 7C12.5 4.79086 10.7091 3 8.5 3C6.29086 3 4.5 4.79086 4.5 7C4.5 9.20914 6.29086 11 8.5 11Z"
      stroke={props.color}
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M17 11L19 13L23 9"
      stroke={props.color}
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const SettingSvg = (
  props: React.JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>
) => (
  <svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g clipPath="url(#clip0_299_7413)">
      <path
        d="M12 14.4999C13.3807 14.4999 14.5 13.3806 14.5 11.9999C14.5 10.6192 13.3807 9.49992 12 9.49992C10.6193 9.49992 9.49998 10.6192 9.49998 11.9999C9.49998 13.3806 10.6193 14.4999 12 14.4999Z"
        stroke={props.color}
        strokeWidth={1.2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M18.1666 14.4999C18.0557 14.7513 18.0226 15.0301 18.0716 15.3004C18.1207 15.5707 18.2495 15.8202 18.4416 16.0166L18.4916 16.0666C18.6466 16.2214 18.7695 16.4052 18.8534 16.6075C18.9373 16.8098 18.9805 17.0267 18.9805 17.2458C18.9805 17.4648 18.9373 17.6817 18.8534 17.884C18.7695 18.0863 18.6466 18.2701 18.4916 18.4249C18.3369 18.5799 18.153 18.7028 17.9507 18.7867C17.7484 18.8706 17.5315 18.9137 17.3125 18.9137C17.0935 18.9137 16.8766 18.8706 16.6742 18.7867C16.4719 18.7028 16.2881 18.5799 16.1333 18.4249L16.0833 18.3749C15.8869 18.1828 15.6375 18.0539 15.3671 18.0049C15.0968 17.9559 14.818 17.989 14.5666 18.0999C14.3202 18.2056 14.11 18.381 13.9619 18.6045C13.8138 18.8281 13.7344 19.0901 13.7333 19.3583V19.4999C13.7333 19.9419 13.5577 20.3659 13.2452 20.6784C12.9326 20.991 12.5087 21.1666 12.0666 21.1666C11.6246 21.1666 11.2007 20.991 10.8881 20.6784C10.5756 20.3659 10.4 19.9419 10.4 19.4999V19.4249C10.3935 19.1491 10.3042 18.8816 10.1437 18.6572C9.98323 18.4328 9.75893 18.2618 9.49998 18.1666C9.24863 18.0557 8.96982 18.0226 8.69949 18.0716C8.42916 18.1206 8.17971 18.2495 7.98331 18.4416L7.93331 18.4916C7.77852 18.6465 7.59471 18.7695 7.39238 18.8533C7.19005 18.9372 6.97317 18.9804 6.75415 18.9804C6.53512 18.9804 6.31824 18.9372 6.11591 18.8533C5.91358 18.7695 5.72977 18.6465 5.57498 18.4916C5.42002 18.3368 5.29709 18.153 5.21321 17.9507C5.12934 17.7483 5.08617 17.5314 5.08617 17.3124C5.08617 17.0934 5.12934 16.8765 5.21321 16.6742C5.29709 16.4719 5.42002 16.288 5.57498 16.1332L5.62498 16.0833C5.81709 15.8869 5.94597 15.6374 5.99498 15.3671C6.044 15.0967 6.01091 14.8179 5.89998 14.5666C5.79434 14.3201 5.61894 14.1099 5.39537 13.9618C5.17179 13.8138 4.9098 13.7343 4.64165 13.7333H4.49998C4.05795 13.7333 3.63403 13.5577 3.32147 13.2451C3.00891 12.9325 2.83331 12.5086 2.83331 12.0666C2.83331 11.6246 3.00891 11.2006 3.32147 10.8881C3.63403 10.5755 4.05795 10.3999 4.49998 10.3999H4.57498C4.85081 10.3935 5.11832 10.3042 5.34273 10.1437C5.56714 9.98317 5.73808 9.75886 5.83331 9.49992C5.94424 9.24857 5.97733 8.96976 5.92832 8.69943C5.8793 8.4291 5.75043 8.17965 5.55831 7.98325L5.50831 7.93325C5.35335 7.77846 5.23042 7.59465 5.14655 7.39232C5.06267 7.18999 5.0195 6.97311 5.0195 6.75408C5.0195 6.53506 5.06267 6.31818 5.14655 6.11585C5.23042 5.91352 5.35335 5.72971 5.50831 5.57492C5.6631 5.41996 5.84692 5.29703 6.04925 5.21315C6.25158 5.12928 6.46845 5.08611 6.68748 5.08611C6.90651 5.08611 7.12338 5.12928 7.32571 5.21315C7.52804 5.29703 7.71186 5.41996 7.86665 5.57492L7.91665 5.62492C8.11305 5.81703 8.36249 5.94591 8.63282 5.99492C8.90315 6.04394 9.18197 6.01085 9.43331 5.89992H9.49998C9.74645 5.79428 9.95666 5.61888 10.1047 5.39531C10.2528 5.17173 10.3322 4.90974 10.3333 4.64159V4.49992C10.3333 4.05789 10.5089 3.63397 10.8215 3.32141C11.134 3.00885 11.558 2.83325 12 2.83325C12.442 2.83325 12.8659 3.00885 13.1785 3.32141C13.4911 3.63397 13.6666 4.05789 13.6666 4.49992V4.57492C13.6677 4.84307 13.7472 5.10506 13.8952 5.32864C14.0433 5.55221 14.2535 5.72762 14.5 5.83325C14.7513 5.94418 15.0301 5.97727 15.3005 5.92826C15.5708 5.87924 15.8202 5.75037 16.0166 5.55825L16.0666 5.50825C16.2214 5.35329 16.4052 5.23036 16.6076 5.14649C16.8099 5.06261 17.0268 5.01944 17.2458 5.01944C17.4648 5.01944 17.6817 5.06261 17.884 5.14649C18.0864 5.23036 18.2702 5.35329 18.425 5.50825C18.5799 5.66304 18.7029 5.84685 18.7867 6.04918C18.8706 6.25151 18.9138 6.46839 18.9138 6.68742C18.9138 6.90644 18.8706 7.12332 18.7867 7.32565C18.7029 7.52798 18.5799 7.7118 18.425 7.86658L18.375 7.91658C18.1829 8.11298 18.054 8.36243 18.005 8.63276C17.956 8.90309 17.989 9.1819 18.1 9.43325V9.49992C18.2056 9.74639 18.381 9.9566 18.6046 10.1047C18.8282 10.2527 19.0902 10.3322 19.3583 10.3333H19.5C19.942 10.3333 20.3659 10.5088 20.6785 10.8214C20.991 11.134 21.1666 11.5579 21.1666 11.9999C21.1666 12.4419 20.991 12.8659 20.6785 13.1784C20.3659 13.491 19.942 13.6666 19.5 13.6666H19.425C19.1568 13.6677 18.8948 13.7471 18.6713 13.8952C18.4477 14.0432 18.2723 14.2534 18.1666 14.4999Z"
        stroke={props.color}
        strokeWidth={1.2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
    <defs>
      <clipPath id="clip0_299_7413">
        <rect width={20} height={20} fill="white" transform="translate(2 2)" />
      </clipPath>
    </defs>
  </svg>
);

export const LogoutSvg = (
  props: React.JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>
) => (
  <svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M12.5651 21.6454H5.09465C4.8466 21.6454 4.64516 21.4398 4.64516 21.187V3.11327C4.64516 2.86058 4.84677 2.65484 5.09465 2.65484H12.5651C12.7432 2.65484 12.8877 2.50813 12.8877 2.32742C12.8877 2.14672 12.7432 2 12.5651 2H5.09465C4.49106 2 4 2.49955 4 3.11328V21.187C4 21.8007 4.49106 22.3003 5.09465 22.3003H12.5651C12.7432 22.3003 12.8877 22.1535 12.8877 21.9728C12.8877 21.7921 12.7433 21.6454 12.5651 21.6454V21.6454ZM20.1499 11.9186L15.7247 7.42719C15.5987 7.29929 15.3946 7.29929 15.2684 7.42719C15.1422 7.55509 15.1424 7.76247 15.2684 7.89036L19.1433 11.8227H8.61245C8.43442 11.8227 8.28987 11.9694 8.28987 12.1501C8.28987 12.3308 8.43442 12.4775 8.61245 12.4775H19.1433L15.2684 16.4103C15.1424 16.5382 15.1424 16.7454 15.2684 16.8734C15.3314 16.9374 15.4136 16.9694 15.4964 16.9694C15.5792 16.9694 15.6617 16.9374 15.7245 16.8734L20.1497 12.382C20.21 12.3208 20.2442 12.2375 20.2442 12.1505C20.2444 12.0633 20.2105 11.9802 20.1499 11.9186V11.9186Z"
      fill={props.color}
    />
  </svg>
);

export const BankSvg = (
  props: React.JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>
) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M3 9.5 12 4l9 5.5M5 20h14M10 9h4m-8 8v-5m4 5v-5m4 5v-5m4 5v-5"
    />
  </svg>
);