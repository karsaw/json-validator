import React, { Component } from 'react'
import { Grid, Form, Message, Label ,Segment,Button,Accordion,Icon} from 'semantic-ui-react';
import {UnControlled as CodeMirror} from 'react-codemirror2'
import '../../node_modules/codemirror/mode/javascript/javascript.js';
import './index.css'

class Home extends Component {
    constructor(){
        super()
        this.state={
            data:'',
            stackTrace:'',
            status:null,
            message:'',
            showMessage:false,
            activeIndex:1,
            
        }
    }
    validateJSON=()=>{
       let message = this.isJSON(this.state.data)
        if(message === 'Valid JSON'){
            this.setState({
                data:JSON.stringify(JSON.parse(this.state.data),null,4),
                message:message,
                status:true,
                showMessage:true
            })
        }else{
            this.setState({
                
                status:false,
                stackTrace:message,
                message:message.split("\n", 1)[0],
                showMessage:true
            })
        }
        
    }
    handleClick = (e, titleProps) => {
        const { index } = titleProps
        const { activeIndex } = this.state
        const newIndex = activeIndex === index ? -1 : index
        this.setState({ activeIndex: newIndex })
    }

    isJSON =(data)=>{
        try {
            JSON.parse(data)
        } catch (e) {
            return e.stack
            
        }
        return 'Valid JSON'
    }
    render() {
        const {data,stackTrace,status,message,showMessage,activeIndex} = this.state
        
        return (
            <Grid padded columns={16}>
                <Grid.Row >
                    <Grid.Column width={10}>
                        <Form>
                        <Segment raised>
                            <Label as='a' color='blue'  attached='top left'>
                                JSON
                                
                            </Label>
                            <span className='validate-btn'>
                            <Button size='tiny' onClick={this.validateJSON}>Validate</Button>
                            </span>
     
                           
                            <div className='editor'>
                           
                                <CodeMirror
                                value={data}
                                autoCursor={false}
                                options={{
                                    mode: {name: "javascript", json: true},
                                    theme: 'material',
                                    lineNumbers: true
                                }}
                                
                                onChange={(editor, data, value) => {this.setState({data:value})
                                }}
                                />
                                
                            
                                </div>
                            </Segment>
                        </Form>
                    </Grid.Column>
                    <Grid.Column width={6}>
                    <Segment raised style={{height:'560px'}} >
                        <h4 className='h4'>
                            Simple, lightweight and elegant JSON Validator.
                            
                        </h4>
                        {showMessage?
                        
                        <Message className={status?'positive':'negative'}>
                            <Message.Header>{message}</Message.Header>
                                <p>
                                {status?null:data.substr(0,parseInt(message.split(" ")[message.split(" ").length-1]))}
                              
                                </p>
                        </Message>:null}
                        {showMessage && !status?
                        <Segment style={{background:"#273238",color:"#fff"}}>
                        <Accordion inverted>
                            <Accordion.Title
                                active={activeIndex === 0}
                                index={0}
                                onClick={this.handleClick}
                            >
                                <Icon name='dropdown' />
                               StackTrace
                            </Accordion.Title>
                            <Accordion.Content active={activeIndex === 0}>
                                <p>
                               {stackTrace.split('\n',10).map(function (line) { return line.trim(); })}
                            
                                </p>
                            </Accordion.Content>
                        </Accordion>
                        </Segment>:null}
                        
                        </Segment>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        )
    }
}
export default Home;