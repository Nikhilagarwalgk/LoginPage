import Header from "../component/Header";
import Footer from "../component/Footer";
import Table from "../component/Table";

const Dashboard = () => {

    const rows = [
        { name: 'TATA HARRIER', email: 'BLACK', gender: '14 LACS' },
        { name: 'TATA HARRIER', email: 'BLACK', gender: '14 LACS' },
        { name: 'TATA HARRIER', email: 'BLACK', gender: '14 LACS' },
        { name: 'TATA HARRIER', email: 'BLACK', gender: '14 LACS' },
    ];

    const columns = [

        {
            accessorKey: "name",
            header: "Name",
        },
        {
            accessorKey: "email",
            header: "Email",
        },
        {
            accessorKey: "gender",
            header: "Gender",
        },

    ];

    return (
        <>
            <Header />
            <Table data={rows} columns={columns} />
            <Footer />
        </>
    )
};
export default Dashboard;