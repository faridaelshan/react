import Layout from "../components/layout";

const index =()=>{
    return(
        <Layout>
        <h1>Hello</h1>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita beatae provident, quibusdam sed recusandae magnam aliquid porro sint asperiores, pariatur ducimus adipisci eum dignissimos, dolore ut at quis commodi vel?</p>
        <style jsx>{`
            p{
                color: green;
                background: blue;
            }
        `}</style>
        </Layout>
    )
}
export default index;