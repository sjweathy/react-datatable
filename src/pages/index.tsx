import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.css";

const inter = Inter({ subsets: ["latin"] });
// let users: any;

import people from "@/data/people.json";
import DataTable from "@/ui/datatable";

// fetch("https://jsonplaceholder.typicode.com/users")
//     .then((response) => response.json())
//     .then((data) => {
//         users = data;
//     })
//     .then((users) => console.log(users));

export default function Home() {
    return (
        <div className="mt-16 container mx-auto">
            <DataTable rows={people} />
        </div>
    );
}
