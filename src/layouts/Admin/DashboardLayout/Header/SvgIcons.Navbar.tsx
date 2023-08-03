export const NotificationBell = (
  props: React.JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>
) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={18}
    height={18}
    fill="none"
    {...props}
  >
    <path
      stroke={props.color || "#5D6679"}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.2}
      d="M10.442 16.5a1.667 1.667 0 0 1-2.884 0M14 5.667a5 5 0 0 0-10 0c0 5.833-2.5 7.5-2.5 7.5h15S14 11.5 14 5.667Z"
    />
  </svg>
);

export const BreadCrumbsHome = (
  props?: React.JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>
) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={16}
    height={16}
    fill="none"
    {...props}
  >
    <path
      stroke="#1570EF"
      strokeWidth={1.5}
      d="M6.667 14H4a2 2 0 0 1-2-2V8.464a2 2 0 0 1 .548-1.376l4-4.222a2 2 0 0 1 2.904 0l4 4.222A2 2 0 0 1 14 8.464V12a2 2 0 0 1-2 2H9.333m-2.666 0v-3.5a.5.5 0 0 1 .5-.5h1.666a.5.5 0 0 1 .5.5V14m-2.666 0h2.666"
    />
  </svg>
);
