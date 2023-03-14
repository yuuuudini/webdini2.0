import Home from "@/pages/index";
import MyLayout from "@/components/layout";
import About from "@/pages/about";

export default function Works(){
    return(
        <div></div>
    )
}

Works.getLayout = (page) => {
    return <MyLayout>{page}</MyLayout>;
};