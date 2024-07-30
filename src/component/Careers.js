import React from 'react';
import {Link, useLoaderData} from "react-router-dom";

function Careers(props) {

    const careerList = useLoaderData();

    return (
        <div className="">
            <h1>Careers Page</h1>
            <h2>Fetch data from API backend to list all position available </h2>
            {careerList.careers.map(item =>

                <div className="card my-2"  key={item.id}>
                    <div className="card-body">
                        <h5 className="card-title">{item.title}</h5>
                        <h6 className="card-subtitle mb-2 text-muted">salary: {item.salary}</h6>
                        <p className="card-text">Location: {item.location}</p>
                        <Link to="/" className="btn btn-primary float-end">
                            Apply Now
                        </Link>
                    </div>
                </div>
            )
            }
        </div>
    );
}

export const careersLoader = async () => {

    const url = "...";
    const response = await fetch(url);

    if(!response.ok){
        throw Error('Could not find the careers.')
    }

    // return response.json;
    return dataApiMock;
}


export default Careers;


const dataApiMock =
    {
        "careers": [
            {
                "id": 1,
                "title": "Senior React Developer",
                "salary": 50000,
                "location": "London, UK"
            },
            {
                "id": 2,
                "title": "Plumber",
                "salary": 40000,
                "location": "Bowser's Castle"
            },
            {
                "id": 3,
                "title": "Gym Leader",
                "salary": 75000,
                "location": "Kanto Region"
            },
            {
                "id": 4,
                "title": "Vue Developer",
                "salary": 40000,
                "location": "Liverpool, UK"
            },
            {
                "id": 5,
                "title": "Tutorial Maker",
                "salary": 35000,
                "location": "Manchester, UK"
            },
            {
                "id": 6,
                "title": "Website Manager",
                "salary": 50000,
                "location": "Berlin, Germany"
            },
            {
                "id": 7,
                "title": "Food Tester",
                "salary": 30000,
                "location": "London, UK"
            }
        ]
    }