import React from "react";
import App from "next/app";
import withApollo from "../lib/withApollo";
import { getDataFromTree } from "@apollo/react-ssr";
import ContextWrapper from "../context/contextWrapper";
import cookies from "next-cookies";

class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {};
    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }
    return { pageProps, cookie: cookies(ctx).token || "" };
  }
  render() {
    const { Component, pageProps } = this.props;
    return (
      <ContextWrapper cookie={this.props.cookie}>
        <Component {...pageProps} />
      </ContextWrapper>
    );
  }
}

export default withApollo(MyApp, { getDataFromTree });
