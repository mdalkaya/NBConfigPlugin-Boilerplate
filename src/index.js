import React from "react";
import { render } from "react-dom";
import { AppContainer } from 'react-hot-loader'
import _ from "lodash";
import {
	Image,
	Icon,
	Button,
	Divider,
	Label,
	Input,
	Dropdown,
	Popup,
	List,
	Form,
	Modal,
	Item,
	Dimmer,
	Message,
	Loader,
	TextArea,
	Checkbox,
	Feed,
	Comment
} from "semantic-ui-react";

var WpLib = OMWebPluginLib;
var builder = WpLib.OMPlugin.SamePageBuilder.create();
var plugin = WpLib.OMPlugin.createPlugin(builder);
var tbProp1 = document.getElementById('tbProp1');
var tbProp2 = document.getElementById('tbProp2');


/*
"use strict";
var StarterConfig;
(function (StarterConfig) {
    var WpLib = OMWebPluginLib;
    var builder = WpLib.OMPlugin.SamePageBuilder.create();
    var plugin = WpLib.OMPlugin.createPlugin(builder);
    var tbProp1 = document.getElementById('tbProp1');
	var tbProp2 = document.getElementById('tbProp2');
    if (!!tbProp2) {
      //  tbProp1.addEventListener('change', onChangeField);
		tbProp2.addEventListener('change', onChangeField);
    }
    function onChangeField() {
        var config = {
        //    prop1: tbProp1.value,
			prop2: tbProp2.value
        };
        plugin.postNotify(WpLib.OMNotify.Board.Module, WpLib.OMNotify.Board.SetWidgetConfig, config);
    }
})(StarterConfig || (StarterConfig = {}));
//# sourceMappingURL=config.js.map
*/


class App extends React.Component {
    constructor(props) {
        super(props);
        this.handleOnSetField = this.handleOnSetField.bind(this);
        this.state = {
          param1: null,
        };
        

}
    handleOnSetField(){
        console.log("Field value entered");
       
        var config = {
                prop1: this.state.param1
                };
         plugin.postNotify(WpLib.OMNotify.Board.Module, WpLib.OMNotify.Board.SetWidgetConfig, config);
     //   console.log(config);
    
    }	

render() {
		return (
            <div>

            <Input icon='search' placeholder='PLease enter Search parameter 1...' 
            onChange={(e, data) => {
                this.setState({ param1: data.value });
                
                this.handleOnSetField();
                console.log(this.state.param1);
            }}
            
            
            />
          
          </div>
		);
	}
}





render(<AppContainer><App /></AppContainer>, document.getElementById('root'));


 if (process.env.NODE_ENV !== 'production') {
	 console.log('Looks like we are in development mode!');
	
	 
	 
   }


var currentFile = require.resolve('./index.js');
if (module.hot) {
  module.hot.accept(currentFile, () => { 
  		const App = require(currentFile).default;
		render(<AppContainer> <App /></AppContainer>, document.getElementById('root'));
  })
}
