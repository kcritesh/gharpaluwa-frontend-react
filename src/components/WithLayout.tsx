import React from "react";

interface Props {
  component: React.FC;
  layout: any;
  minified?: boolean;
  notification?: boolean;
  navBg?: string;
  [key: string]: any;
  noScroll?: boolean;
}

const WithLayout = (props: Props) => {
  const {
    layout: Layout,
    component: Component,
    minified,
    notification,
    navBg,
    noScroll = false,
    hideTopbar = false,
    ...rest
  } = props;

  const layout = { minified, notification, navBg };

  return (
    <Layout hideTopbar={hideTopbar} noScroll={noScroll} {...layout}>
      <Component {...rest} />
    </Layout>
  );
};

export default WithLayout;