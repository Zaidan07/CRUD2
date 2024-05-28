import { CreateButton } from "@/components/button";
import ContactTable from "@/components/contact-table";
import Search from "@/components/search";

const Cotacts = () => {
 return (
  <div className="max-w-screen-md mx-auto mt-5">
    <h1 className="title text-2xl font-bold py-10">Data Barang</h1>
    <div className="flex items-center justify-between gap-1 mb-5">
      
      <Search/>
      <CreateButton/>
    </div>
    <ContactTable/>
  </div>
 );
}

export default Cotacts