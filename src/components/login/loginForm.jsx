import React, { useState, useContext } from "react";
import { MoviesContext } from "../../context/MoviesContext"; // Import MoviesContext
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import style from "./loginForm.module.css";

// Login form component
const LoginForm = () => {
    const { handleLogin } = useContext(MoviesContext); // Get handleLogin function from context

    const [loginformData, setLoginFormData] = useState({
        email: "",
        password: "",
    });

    // Handle input change to update form data
    const handleChange = (e) => {
        const { name, value } = e.target;
        setLoginFormData({ ...loginformData, [name]: value });
    };

    // Handle login request
    const handleLoginRequest = (event) => {
        event.preventDefault();

        // Check if the email and password fields are filled
        if (!loginformData.email || !loginformData.password) {
            alert("Please fill in all the required fields");
            return;
        }

        const loginData = {
            email: loginformData.email,
            password: loginformData.password,
        };

        handleLogin(loginData); // Call the handleLogin function to send the login data
    };

    return (
        <section role="main" aria-labelledby="login-form-title" className="w-full max-w-md mx-auto mt-8">
            <header>
                <h2 id="login-form-title" className="text-2xl font-semibold text-center mb-6">Welcome Back</h2>
            </header>
            <Card className="shadow-xl rounded-2xl">
                <CardContent className="p-6">
                    <form onSubmit={handleLoginRequest} className="space-y-5">
                        <div>
                            <Label htmlFor="email">Email</Label>
                            <Input
                                type="email"
                                id="email"
                                name="email"
                                placeholder="you@example.com"
                                value={loginformData.email}
                                onChange={handleChange}
                                required
                                aria-label="Enter your email"
                                aria-required="true"
                            />
                        </div>
                        <div>
                            <Label htmlFor="password">Password</Label>
                            <Input
                                type="password"
                                id="password"
                                name="password"
                                placeholder="••••••••"
                                value={loginformData.password}
                                onChange={handleChange}
                                required
                                aria-label="Enter your password"
                                aria-required="true"
                            />
                        </div>
                        <Button type="submit" className="w-full" aria-live="polite">
                            Login
                        </Button>
                    </form>
                </CardContent>
            </Card>
        </section>
    );
};

export default LoginForm;
