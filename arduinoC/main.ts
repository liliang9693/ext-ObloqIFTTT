
//% color="#0099ff" iconWidth=50 iconHeight=40
namespace OBLOQ_IFTTT {
    /*
    //% block="set wifi [SSID][PASSWORD] [PORT] RX(Green)[RX] TX[TX] " blockType="command"
    //% SSID.shadow="string"  SSID.defl="your ssid"
    //% PASSWORD.shadow="string"  PASSWORD.defl="your password"
    //% PORT.shadow="dropdown" PORT.options="PORT"
    //% TX.shadow="dropdown" TX.options="PIN"
    //% RX.shadow="dropdown" RX.options="PIN"
    export function setWifi(parameter: any, block: any) {
        let ssid = parameter.SSID.code;
        let password= parameter.PASSWORD.code;
        let port = parameter.PORT.code;
        let tx= parameter.TX.code;
        let rx = parameter.RX.code;

        if(Generator.board === 'microbit'){
            Generator.addInclude("Microbit_Obloq.h","#include <Microbit_Obloq.h>");\
            Generator.addObject("obloqObject","Microbit_Obloq","olq;");
            if(port==="softwareSerial"){
                Generator.addInclude("SoftwareSerial.h","#include <SoftwareSerial.h>");
            
                Generator.addObject("SoftwareSerial","SoftwareSerial",`${port}(${rx}, ${tx});`);
                
                Generator.addSetup("setup", `${port}.begin(9600);\n\tolq.startConnect(&${port}, ${ssid}, ${password}, "maker.ifttt.com", 80);`, false);
            }else if(port==="Serial"){
                
                Generator.addSetup("setup", `olq.startConnect(${rx}, ${tx}, ${ssid}, ${password}, "maker.ifttt.com", 80);`, false);
            

            }
            
        }
    }*/

    /*
    //% block="get ip" blockType="reporter"
    export function getIp(){
        Generator.addCode(["olq.IPAddress",Generator.ORDER_UNARY_POSTFIX],);
    }
*/

    //% block="IFTTT set event:[EVENT] key:[KEY]" blockType="command"
    //% EVENT.shadow="string" EVENT.defl="yourEvent"
    //% KEY.shadow="string" KEY.defl="yourKey"

    export function setIFTTT(parameter:any){
        let event=parameter.EVENT.code;
        let key=parameter.KEY.code;

        Generator.addObject("iftttevent","String",`ifttt_event=${event};`);
        Generator.addObject("iftttkey","String",`ifttt_key=${key};`);

    }

    //% block="IFTTT(POST) Value1:[V1] Value2:[V2]  Value3:[V3]  timeout:[TO]" blockType="command"
    //% V1.shadow="string" V1.defl="a"
    //% V2.shadow="string" V2.defl="b"
    //% V3.shadow="string" V3.defl="c"
    //% TO.shadow="number" TO.defl="10000"
    export function postIFTTT(parameter:any){
        let v1=parameter.V1.code;
        let v2=parameter.V2.code;
        let v3=parameter.V3.code;
        let timeout=parameter.TO.code;

       // Generator.addCode(`String url="trigger/"+ifttt_event+"/with/key/"+ifttt_key;`);
       // Generator.addCode(`String content=String("{\\\"value1\\\":") + ${v1} + String(",\\\"value2\\\":") +   ${v2}  +  String(",\\\"value3\\\":")+   ${v3}  +  "}"  ;`);
      //  Generator.addCode(`olq.post(url,content,${timeout});`);
      Generator.addCode(`olq.post("trigger/"+ifttt_event+"/with/key/"+ifttt_key,String("{\\\"value1\\\":") + String(${v1}) + String(",\\\"value2\\\":") +    String(${v2})  +  String(",\\\"value3\\\":")+    String(${v3})  +  "}"  ,${timeout});`);
        //send:|3|2|http://maker.ifttt.com/trigger/test/with/key/B_Q-1Y9xxxxxxwPHIx55lQ,{"value1":11,"value2":22,"value3":33}|\r
    }

    /*
    //% block="IFTTT use USB Serial to print log" blockType="command"
    export function logIFTTT(parameter:any){

        Generator.addObject("logfunction","void","obloqDebugEvent(String& debugMessage, int8_t errorCode){Serial.println(errorCode);Serial.println(debugMessage);}");
        Generator.addSetup("logsetup","Serial.begin(9600);\n\tolq.registerDubugHandle(obloqDebugEvent);")

    }*/

}
