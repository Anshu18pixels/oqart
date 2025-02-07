import Layout from "../components/layout/Layout";
import { useFormik } from "formik";
import * as Yup from "yup";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./style.css";
import logo from "../../public/assets/Logo.svg";
import ContactService from "../services/contact.service";
const Contact = () => {
  const formik = useFormik({
    initialValues: {
      name: "",
      phone: "",
      email: "",
      name_of_brand: "",
      designation: "",
      product_segment: "",
      certifying_agency_name: "",
      no_of_product: "",
      website_url: "",
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Please enter your name").min(3, "Too short"),
      phone: Yup.string()
        .required("Please enter your phone number")
        .matches(/^\d{10}$/, "Phone number must be 10 digits"),
      email: Yup.string()
        .required("Email is required")
        .email("Invalid email format"),
      name_of_brand: Yup.string().required("Please enter brand name"),
      designation: Yup.string().required("Please select a designation"),
      product_segment: Yup.string().required("Please select an option"),
      certifying_agency_name: Yup.string().required(
        "Please enter certifying agency name"
      ),
      no_of_product: Yup.number()
        .required("Please enter number of products")
        .positive("Number must be positive")
        .integer("Must be an integer"),
    }),
    onSubmit: async (values, { setSubmitting, resetForm }) => {
      try {
        setSubmitting(true);
        await ContactService.addUser(values);
        console.log(values);
        toast.success("Thanks! your are connected with oqart.com!");
        resetForm();
      } catch (error) {
        toast.error("Something went wrong");
      } finally {
        setSubmitting(false);
      }
    },
    validateOnChange: false,
    validateOnBlur: false,
  });
  return (
    <Layout>
      <div className="container">
        <div className="row">
          <div className="col-sm-4"></div>
          <div className="col-sm-8">
            <div className="card">
              <div
                className="card-header"
                style={{ "background-color": "white" }}
              >
                <h3 className="text-center mt-3">
                  <img src={logo} alt="" />
                </h3>
              </div>
              <div className="card-body">
                <form onSubmit={formik.handleSubmit}>
                  <div className="row">
                    {/* Name */}
                    <div className="col-sm-6">
                      <div className="form-group">
                        <label className="form-label mt-2">Name</label>
                        <input
                          type="text"
                          name="name"
                          className="form-control rounded"
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          value={formik.values.name}
                          placeholder="Enter your name"
                        />
                        {formik.touched.name && formik.errors.name && (
                          <span className="text-danger">
                            {formik.errors.name}
                          </span>
                        )}
                      </div>
                    </div>
                    {/* Phone */}
                    <div className="col-sm-6">
                      <div className="form-group">
                        <label className="form-label mt-2">Phone</label>
                        <input
                          type="text"
                          name="phone"
                          className="form-control rounded"
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          value={formik.values.phone}
                          placeholder="Enter your phone number"
                        />
                        {formik.touched.phone && formik.errors.phone && (
                          <span className="text-danger">
                            {formik.errors.phone}
                          </span>
                        )}
                      </div>
                    </div>
                    {/* Email */}
                    <div className="col-sm-6">
                      <div className="form-group">
                        <label className="form-label mt-2">Email</label>
                        <input
                          type="email"
                          name="email"
                          className="form-control rounded"
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          value={formik.values.email}
                          placeholder="Enter your email"
                        />
                        {formik.touched.email && formik.errors.email && (
                          <span className="text-danger">
                            {formik.errors.email}
                          </span>
                        )}
                      </div>
                    </div>
                    {/* Name of Brand */}
                    <div className="col-sm-6">
                      <div className="form-group">
                        <label className="form-label mt-2">Name of Brand</label>
                        <input
                          type="text"
                          name="name_of_brand"
                          className="form-control rounded"
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          value={formik.values.name_of_brand}
                          placeholder="Enter your brand name"
                        />
                        {formik.touched.name_of_brand &&
                          formik.errors.name_of_brand && (
                            <span className="text-danger">
                              {formik.errors.name_of_brand}
                            </span>
                          )}
                      </div>
                    </div>
                    {/* Designation */}
                    <div className="col-sm-6">
                      <div className="form-group">
                        <label className="form-label mt-2">Designation</label>
                        <select
                          name="designation"
                          className="form-control rounded"
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          value={formik.values.designation}
                        >
                          <option value="">Select Designation</option>
                          <option value="Founder">Founder/CEO</option>
                          <option value="Director">Director</option>
                          <option value="Manager">Manager</option>
                          <option value="Other">Other</option>
                        </select>
                        {formik.touched.designation &&
                          formik.errors.designation && (
                            <span className="text-danger">
                              {formik.errors.designation}
                            </span>
                          )}
                      </div>
                    </div>
                    {/* Product Segment (Radio Buttons) */}
                    <div className="col-sm-6">
                      <div className="form-group">
                        <label className="form-label mt-2">
                          Product Segment if organic or not
                        </label>
                        <div>
                          <div className="form-check form-check-inline">
                            <input
                              type="radio"
                              name="product_segment"
                              value="Yes"
                              className="form-check-input"
                              onChange={formik.handleChange}
                              onBlur={formik.handleBlur}
                              checked={formik.values.product_segment === "Yes"}
                            />
                            <label className="form-check-label">Yes</label>
                          </div>
                          <div className="form-check form-check-inline">
                            <input
                              type="radio"
                              name="product_segment"
                              value="No"
                              className="form-check-input"
                              onChange={formik.handleChange}
                              onBlur={formik.handleBlur}
                              checked={formik.values.product_segment === "No"}
                            />
                            <label className="form-check-label">No</label>
                          </div>
                        </div>
                        {formik.touched.product_segment &&
                          formik.errors.product_segment && (
                            <span className="text-danger">
                              {formik.errors.product_segment}
                            </span>
                          )}
                      </div>
                    </div>
                    {/* Certifying Agency Name */}
                    <div className="col-sm-6">
                      <div className="form-group">
                        <label className="form-label mt-2">
                          Certifying Agency Name
                        </label>
                        <input
                          type="text"
                          name="certifying_agency_name"
                          className="form-control rounded"
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          value={formik.values.certifying_agency_name}
                          placeholder="Enter certifying agency name"
                        />
                        {formik.touched.certifying_agency_name &&
                          formik.errors.certifying_agency_name && (
                            <span className="text-danger">
                              {formik.errors.certifying_agency_name}
                            </span>
                          )}
                      </div>
                    </div>
                    {/* Website */}
                    <div className="col-sm-6">
                      <div className="form-group">
                        <label className="form-label mt-2">Website URL</label>
                        <input
                          type="text"
                          name="website_url"
                          className="form-control rounded"
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          value={formik.values.website_url}
                          placeholder="Enter certifying agency name"
                        />
                        {formik.touched.website_url &&
                          formik.errors.website_url && (
                            <span className="text-danger">
                              {formik.errors.website_url}
                            </span>
                          )}
                      </div>
                    </div>
                    {/* Number of Products */}
                    <div className="col-sm-12">
                      <div className="form-group">
                        <label className="form-label mt-2">
                          Number of Products
                        </label>
                        <input
                          type="number"
                          name="no_of_product"
                          className="form-control rounded"
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          value={formik.values.no_of_product}
                          placeholder="Enter number of products"
                        />
                        {formik.touched.no_of_product &&
                          formik.errors.no_of_product && (
                            <span className="text-danger">
                              {formik.errors.no_of_product}
                            </span>
                          )}
                      </div>
                    </div>
                    <div className="text-end mt-4">
                      <button
                        className="btn btn-outline-warning px-5 py-2"
                        type="button"
                        onClick={() => formik.resetForm()}
                      >
                        Reset
                      </button>
                      &nbsp;&nbsp;&nbsp;
                      <button
                        className="btn btn-outline-success px-5 py-2"
                        type="submit"
                      >
                        Submit
                      </button>
                    </div>
                  </div>
                </form>
                <ToastContainer />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};
export default Contact;
