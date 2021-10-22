import React ,{Component} from "react";
import {Button} from 'antd'
import { throwStatement } from "@babel/types";
const fs = require('fs')

export default class Js extends Component{
    render() {
        return (
            <div>
                <p>{this.getData()}</p>
            </div>
            )

    }

    getData = () => {
        const p = new Promise((resolve,reject) => {
            fs.readFile('./App.js',(err,data) => {
                if(err) reject(err);
                resolve(data)
            })
        });
        p.then(function(value){
            console.log(value.toString())
        },function(err){
            console.log(err)
        })

    }
}
