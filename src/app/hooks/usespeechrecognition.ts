//@ts-ignore
import webkitspeecRecognition from '@types/dom-speech-recognition';
import { useState } from 'react';

const usespeechrecognition  = () => {};

let recogition: any = null;
if ("webkitSpeechRecognition" in window){
    recogition = new webkitSpeechRecognition();
    recogition.continuous  = true;
    recogition.lang = "en-US"
}   

const useSpeechRecognition = () => {
    const [text, setText] = useState("");
}