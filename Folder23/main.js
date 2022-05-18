// Import the functions you need from the SDKs you need
import {
    initializeApp
} from "https://www.gstatic.com/firebasejs/9.8.1/firebase-app.js";
import {
    getAnalytics
} from "https://www.gstatic.com/firebasejs/9.8.1/firebase-analytics.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDWk3gWevvu9AwGHDrEtTs0YTxAJGYMnYA",
    authDomain: "sample-40387.firebaseapp.com",
    databaseURL: "https://sample-40387-default-rtdb.firebaseio.com",
    projectId: "sample-40387",
    storageBucket: "sample-40387.appspot.com",
    messagingSenderId: "347364799330",
    appId: "1:347364799330:web:97be3d1b8b8f87addfb23b",
    measurementId: "G-N2YDQ09WY2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
var hr1 = document.querySelector("#hr1");
var h1 = document.querySelector("#h1");
var label1 = document.querySelector("#label2");
var label2 = document.querySelector("#label3");
var hr2 = document.querySelector("#hr2");
var signup = document.querySelector("#signup");
var login = document.querySelector("#login");
var span = document.querySelector("#span2");
var container = document.querySelector("#container");
var center = document.querySelector("#center2");
var arr5 = [];
var arr1 = [];
var arr2 = [];
var arr3 = [];
var arr4 = [];

function change1() {
    console.log("check");
    w = window.getComputedStyle(h1).width;
    hr1.style.width = w;
    if (x == 0) {
        label1.style.borderBottomWidth = "3px";
        label2.style.borderWidth = "0px";
        login.style.display = "flex";
        signup.style.display = "none";
        label1.style.fontWeight = "bold";
        label2.style.fontWeight = "500";
    } else {
        label2.style.borderBottomWidth = "3px";
        label1.style.borderWidth = "0px";
        signup.style.display = "flex";
        login.style.display = "none";
        label2.style.fontWeight = "bold";
        label1.style.fontWeight = "500";
    };
    wdh = window.innerWidth;
    container.style.flexDirection = "row";
    center.style.marginLeft = "10px";
    center.style.marginTop = "0px";
    if (wdh <= 830) {
        container.style.flexDirection = "column";
        center.style.marginLeft = "0px";
        center.style.marginTop = "10px";
    };
};
change1();
window.addEventListener("resize", change1);
var x = 0;

function change2() {
    x = 0;
    change1();
};

function change3() {
    x = 1;
    change1();
};
var username = "";
var password = "";
var inp1 = document.querySelector("#username");
var inp2 = document.querySelector("#password");
var inp3 = document.querySelector("#username1");
var inp4 = document.querySelector("#password1");
var inp5 = document.querySelector("#passwordc");
var check = false;

function login1() {
    if (inp1.value !== "") {
        check = false;
        for (i = 0; i < inp1.value.length; i++) {
            if (inp1.value[i] !== "a" && inp1.value[i] !== "b" && inp1.value[i] !== "c" && inp1.value[i] !== "d" && inp1.value[i] !== "e" && inp1.value[i] !== "f" && inp1.value[i] !== "g" && inp1.value[i] !== "h" && inp1.value[i] !== "i" && inp1.value[i] !== "j" && inp1.value[i] !== "k" && inp1.value[i] !== "l" && inp1.value[i] !== "m" && inp1.value[i] !== "n" && inp1.value[i] !== "o" && inp1.value[i] !== "p" && inp1.value[i] !== "q" && inp1.value[i] !== "r" && inp1.value[i] !== "s" && inp1.value[i] !== "t" && inp1.value[i] !== "u" && inp1.value[i] !== "v" && inp1.value[i] !== "w" && inp1.value[i] !== "x" && inp1.value[i] !== "y" && inp1.value[i] !== "z")
                check = true;
        };
        if (check == true) {
            window.alert("User Name cannot contain special characters, spaces or numbers");
        } else {
            if (inp2.value !== "") {
                password = inp2.value;
                localStorage.setItem("Password", password);
                username = inp1.value;
                localStorage.setItem("UserName", username);
            } else {
                window.alert("Password required");
            };
        };
    } else {
        window.alert("User Name required");
    };
};

function signup1() {
    if (inp3.value !== "") {
        check = false;
        for (z = 0; z < inp1.value.length; z++) {
            if (inp3.value[z] !== "a" && inp3.value[z] !== "b" && inp3.value[z] !== "c" && inp3.value[z] !== "d" && inp3.value[z] !== "e" && inp3.value[z] !== "f" && inp3.value[z] !== "g" && inp3.value[z] !== "h" && inp3.value[z] !== "i" && inp3.value[z] !== "j" && inp3.value[z] !== "k" && inp3.value[z] !== "l" && inp3.value[z] !== "m" && inp3.value[z] !== "n" && inp3.value[z] !== "o" && inp3.value[z] !== "p" && inp3.value[z] !== "q" && inp3.value[z] !== "r" && inp3.value[z] !== "s" && inp3.value[z] !== "t" && inp3.value[z] !== "u" && inp3.value[z] !== "v" && inp3.value[z] !== "w" && inp3.value[z] !== "x" && inp3.value[z] !== "y" && inp3.value[z] !== "z")
                check = true;
        };
        if (check == true) {
            window.alert("User Name cannot contain special characters, spaces or numbers");
        } else {
            if (inp4.value !== "") {
                if (inp5.value == inp4.value) {
                    password = inp4.value;
                    localStorage.setItem("Password", password);
                    username = inp3.value;
                    localStorage.setItem("UserName", username);
                } else {
                    window.alert("Password does not match");
                }
            } else {
                window.alert("Password required");
            };
        };
    } else {
        window.alert("User Name required");
    };
};