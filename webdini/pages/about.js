import Home from "@/pages/index";
import MyLayout from "@/components/layout";

export default function About(){
    return <div>joe</div>
}


About.getLayout = (page) => {
    return <MyLayout>{page}</MyLayout>;
};