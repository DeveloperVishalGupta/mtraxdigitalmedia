// import { View, Text } from 'react-native'
import React, { useState } from 'react'
import { Form, Input, Button, Textarea } from "@nextui-org/react";

const Query = () => {
    const [action, setAction] = useState(null);
    return (
        <div className=''>

            <Form
                className="w-full max-w-2xl mx-auto flex flex-col gap-6 rounded-0"
                validationBehavior="native"
                onReset={() => setAction("reset")}
                onSubmit={(e) => {
                    e.preventDefault();
                    let data = Object.fromEntries(new FormData(e.currentTarget));

                    setAction(`submit ${JSON.stringify(data)}`);
                }}
            >
                <Input
                    isRequired
                    errorMessage="Please enter a full name"
                    label="Full Name"
                    labelPlacement="outside"
                    name="fullName"
                    placeholder="Enter your full name"
                    type="text"
                />
                <Input
                    isRequired
                    errorMessage="Please enter a valid mobile number"
                    label="Mobile"
                    labelPlacement="outside"
                    name="mobile"
                    placeholder="Enter your mobile number"
                    type="phone"
                />
                <Input
                    label="Email"
                    labelPlacement="outside"
                    name="email"
                    placeholder="Enter your email"
                    type="email"
                />

                <Textarea
                    label="Requirements"
                    labelPlacement="outside"
                    name="requirements"
                    placeholder="Enter your requirements"
                    type="text-Area"
                />


                <div className="flex gap-2">
                    <Button color="primary" type="submit">
                        Submit
                    </Button>
                    <Button type="reset" variant="flat">
                        Reset
                    </Button>
                </div>
                {action && (
                    <div className="text-small text-default-500">
                        Action: <code>{action}</code>
                    </div>
                )}
            </Form>
        </div>
    )
}

export default Query