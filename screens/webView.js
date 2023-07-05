import React from 'react';
import {WebView} from 'react-native-webview';

const Webview = () =>{
    return <WebView source={{ uri: 'https://evernote.com/about-us' }} style={{ flex: 1 }} />;
    
}

export default Webview;