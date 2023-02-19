import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.css";
import { useState } from "react";

const inter = Inter({ subsets: ["latin"] });


import people from "@/data/people.json";
import DataTable from "@/ui/datatable";

async function getApiData(){
    let users;
    const res = await fetch("https://jsonplaceholder.typicode.com/users")
        .then((response) => response.json())
        .then((data) => {
            users = data;
        })
        .then((users) => console.log(users));
    // users = res.json;
    
    // console.log(users);

    return users;


}

let apiData = getApiData();

// const [users, setUsers] = useState(() => getApiData());

export default function Home() {
    return (
        <div className="mt-16 container mx-auto">
            <DataTable rows={people} />
        </div>
    );
}
