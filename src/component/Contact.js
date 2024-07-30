import React from 'react';
import {Form, redirect, useActionData} from "react-router-dom";

function Contact(props) {

    const data = useActionData();

    return (
        <div className="col-9 border border-1">
            <h3>contact Us</h3>
            <Form method="post" action="/contact">
                <label htmlFor="email">You Email: </label>
                <input type="email" name="email" className="form-control" placeholder="Email Address"/>

                <label htmlFor="message">You Message: </label>
                <textarea name="message" className="form-control" placeholder="Max 1000 chars."/>


                <button type="submit" className="btn btn-primary"> Submit </button>

                { data && data.error && <p>{data.error}</p>}
            </Form>
        </div>
    );
}

export default Contact;

export const contactAction = async ({request}) => {

    // console.log(`request: ${JSON.stringify(request)}`)

    const data = await request.formData();

    const submission = {
        email : data.get('email'),
        message : data.get('message'),
    }

    // console.log(`Submit form to the backend: ${JSON.stringify(submission)}`)

    // in the real case , you may need to send request to the backend server to handle the data
    // so we can handle error here
    if (submission.message.length < 2 ){
        return {
            error: 'Message should be at least 2 chars'
        }
    }

    // redirect the user
    return redirect('/')
}