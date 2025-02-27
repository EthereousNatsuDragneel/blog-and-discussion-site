import { useState } from "react";
import { Link } from "react-router-dom";

export default function Signup() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    marketingAccept: false,
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const validateForm = () => {
    let newErrors = {};
    if (!formData.firstName.trim()) newErrors.firstName = "First name is required";
    if (!formData.lastName.trim()) newErrors.lastName = "Last name is required";
    if (!formData.email.includes("@")) newErrors.email = "Invalid email";
    if (formData.password.length < 6)
      newErrors.password = "Password must be at least 6 characters";
    if (formData.password !== formData.confirmPassword)
      newErrors.confirmPassword = "Passwords do not match";
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      setErrors({});
      console.log("Form Submitted Successfully", formData);
      // Perform authentication logic here
    }
  };

  return (
    <section className="bg-customCyan">
      <div className="lg:grid lg:min-h-screen lg:grid-cols-12">
        <aside className="relative block h-16 lg:order-last lg:col-span-5 lg:h-full xl:col-span-6">
          <img
            alt="Writing"
            src="https://i.ibb.co/KpyPhQSJ/writing.jpg"
            className="absolute inset-0 h-full w-full object-cover"
          />
        </aside>

        <main className="flex items-center justify-center px-8 py-8 sm:px-12 lg:col-span-7 lg:px-16 lg:py-12 xl:col-span-6">
          <div className="max-w-xl lg:max-w-3xl">
            <h1 className="mt-6 text-2xl font-bold text-gray-900 sm:text-3xl md:text-4xl">
              Welcome to Our Blog
            </h1>

            <form
              onSubmit={handleSubmit}
              className="mt-8 grid grid-cols-6 gap-6"
            >
              <div className="col-span-6 sm:col-span-3">
                <label className="block text-sm font-medium text-gray-900">
                  First Name
                </label>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  className="mt-1 w-full rounded-lg border px-4 py-2"
                  placeholder="Enter your first name"
                />
                {errors.firstName && (
                  <p className="text-red-500 text-sm">{errors.firstName}</p>
                )}
              </div>

              <div className="col-span-6 sm:col-span-3">
                <label className="block text-sm font-medium text-gray-900">
                  Last Name
                </label>
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  className="mt-1 w-full rounded-lg border px-4 py-2"
                  placeholder="Enter your last name"
                />
                {errors.lastName && (
                  <p className="text-red-500 text-sm">{errors.lastName}</p>
                )}
              </div>

              <div className="col-span-6">
                <label className="block text-sm font-medium text-gray-900">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="mt-1 w-full rounded-lg border px-4 py-2"
                  placeholder="Enter your email"
                />
                {errors.email && (
                  <p className="text-red-500 text-sm">{errors.email}</p>
                )}
              </div>

              <div className="col-span-6 sm:col-span-3">
                <label className="block text-sm font-medium text-gray-900">
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  className="mt-1 w-full rounded-lg border px-4 py-2"
                  placeholder="Enter your password"
                />
                {errors.password && (
                  <p className="text-red-500 text-sm">{errors.password}</p>
                )}
              </div>

              <div className="col-span-6 sm:col-span-3">
                <label className="block text-sm font-medium text-gray-900">
                  Confirm Password
                </label>
                <input
                  type="password"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  className="mt-1 w-full rounded-lg border px-4 py-2"
                  placeholder="Confirm your password"
                />
                {errors.confirmPassword && (
                  <p className="text-red-500 text-sm">
                    {errors.confirmPassword}
                  </p>
                )}
              </div>

              <div className="col-span-6">
                <label className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    name="marketingAccept"
                    checked={formData.marketingAccept}
                    onChange={handleChange}
                  />
                  <span className="text-sm text-gray-700">
                    I want to receive updates and offers.
                  </span>
                </label>
              </div>

              <div className="col-span-6 sm:flex sm:items-center sm:gap-4">
                <button
                  type="submit"
                  className="rounded-md bg-[#EE7677] px-12 py-3 text-white"
                >
                  Create an account
                </button>
                <p className="mt-4 text-sm text-gray-500 sm:mt-0">
                  Already have an account?{" "}
                  <Link to="/" className="text-gray-700 underline">
                    Log in
                  </Link>
                  .
                </p>
              </div>
            </form>
          </div>
        </main>
      </div>
    </section>
  );
}