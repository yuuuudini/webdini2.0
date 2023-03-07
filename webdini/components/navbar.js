import {Switch} from 'antd'

export default function Navbar(props){
    return (
        <Switch onChange={() => props.onChange()}/>
    )
}