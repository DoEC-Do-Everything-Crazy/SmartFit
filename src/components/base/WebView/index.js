import {Block} from '@components';
import React from 'react';
import {Platform} from 'react-native';
import WebView from 'react-native-webview';

const WEBView = ({data, style, scrollEnabled = true}) => {
  return (
    <Block flex style={style}>
      <WebView
        androidLayerType="hardware"
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        scrollEnabled={scrollEnabled}
        startInLoadingState={true}
        scalesPageToFit={false}
        useWebKit={true}
        originWhitelist={['*']}
        source={{
          baseUrl: '',
          html: `
          <html>
          <head>
            <meta name='viewport' content='width=device-width,initial-scale=1,maximum-scale=1'>
            ${styles}
          </head>
          <body> 
              ${data}
          </body>
          </html>`,
        }}
        injectedJavaScript="window.ReactNativeWebView.postMessage(document.body.scrollHeight)"
      />
    </Block>
  );
};

export default WEBView;

const fileUri = Platform.select({
  ios: 'SanFranciscoDisplay-Regular.otf',
  android: 'file:///android_asset/fonts/SanFranciscoDisplay-Regular.ttf',
});

// const fontFamily = Platform.select({
//   ios: 'Roboto',
//   android: '-apple-system',
// });

const styles = `<style type="text/css">
  @font-face {
    font-family: 'SanFranciscoDisplay-Regular';
    src: local('SanFranciscoDisplay-Regular'), url('${fileUri}') format("truetype");
  }
  * {
    font-size: 14px;
    text-align: justify;
    line-height: 1.5;
    font-family: SanFranciscoDisplay-Regular;
  }
  body {
    margin: 0 !important;
    padding: 0 !important;
  }
  img {
    display: block;
    width: 100%;
    height: auto;
    padding: 0;
    margin: 10px auto;
    border-radius: 10px;
  }
  p, figure {
    padding: 0;
    margin: 0;
  }
</style>`;
