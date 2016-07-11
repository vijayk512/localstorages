/*  
 * Student Info: Name=VijayPanwar, ID=16069
 * Subject: CS557C_HW1_Summer_2016
 * Author: vijay 
 * Filename: hw3.js 
 * Date and Time: Jul 4, 2016 8:55:20 PM 
 * Project Name: webfrontend 
 */

var userlist = [];
var output = '';
var outputcheck = '';
var outputinsert = '';
//localStorage.clear();
//var userlist2 = '';
var id = 1;
var myarray = [];
var mytest = [];
jQuery(document).ready(function () {


    jQuery("#submit").click(function () {
        var username1 = jQuery("#username").val();
        var fname = jQuery("#fname").val();
        var lname = jQuery("#lname").val();
        var email = jQuery("#email").val();
        var password = jQuery("#password").val();
        var cpassword = jQuery("#cpassword").val();
        var gender = jQuery("#gender").val();
//        alert(username)
        if (gender == "1") {
            gender == "Male"
        } else {
            gender == "Female"
        }
//        alert(password);
        if (password != cpassword) {
            alert("password didnt match");
            return false;
        }

        if (localStorage.length != 1) {
            var userdata = JSON.parse(localStorage.userlist);
            for (var i = 0; i < userdata.length; i++) {
                outputcheck += "Object " + i + ":\r\n";
                for (var property in userdata[i]) {



                    if (property == "username") {
//                        alert(username1)
                        if (userdata[i]['username'] == username1) {
                            alert("User name already taken");
                            return false;
                        }
                    }

                    myarray =
                            {
                                id: userdata[i]['id'],
                                username: userdata[i]['username'],
                                fname: userdata[i]['fname'],
                                lname: userdata[i]['lname'],
                                email: userdata[i]['email'],
                                password: userdata[i]['password'],
                                gender: userdata[i]['gender']
                            }
                }
                id = id + 1;
                mytest.push(myarray)
            }
        }

        userlist = {
            id: id,
            username: username1,
            fname: fname,
            lname: lname,
            email: email,
            password: password,
            gender: gender

        }
        mytest.push(userlist);
        localStorage.userlist = JSON.stringify(mytest);
    });

    if (localStorage.length != 1) {
        var userdata = JSON.parse(localStorage.userlist);
        for (var i = 0; i < userdata.length; i++) {
            output += "Object " + i + ":\r\n";
            for (var property in userdata[i]) {
                output += "\t" + property + ": " + userdata[i][property] + "\r\n";
            }
        }
//        alert(output);
    }
});