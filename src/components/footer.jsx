import { Footer } from "flowbite-react";
export function Footer1 () {

    return (
        <>
        <Footer container className="bg-yellow-500 ">
      <Footer.Copyright href="#" by="Flowbite™" year={2022} className="text-white"/>
      <Footer.LinkGroup>
        <Footer.Link href="#" className="text-white">About</Footer.Link>
        <Footer.Link href="#" className="text-white">Privacy Policy</Footer.Link>
        <Footer.Link href="#" className="text-white">Licensing</Footer.Link>
        <Footer.Link href="#" className="text-white">Contact</Footer.Link>
      </Footer.LinkGroup>
    </Footer>
        </>
    );
}