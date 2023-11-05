import React, { useState, useEffect } from "react";
import Hero from "./Hero";

const Posts = () => {
  const [customers, setCustomers] = useState([]);
  const [newCustomerName, setNewCustomerName] = useState("");
  const [editingCustomer, setEditingCustomer] = useState(null);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => {
        setCustomers(data);
      })
      .catch((error) => {
        console.error("Error fetching data", error);
      });
  }, []);

  const addCustomer = () => {
    if (newCustomerName.trim() === "") {
      alert("Please enter a customer name.");
      return;
    }

    const newCustomer = {
      name: newCustomerName,
    };

    fetch("https://jsonplaceholder.typicode.com/users", {
      method: "POST",
      body: JSON.stringify(newCustomer),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setCustomers([...customers, data]);
        setNewCustomerName("");
      })
      .catch((error) => {
        console.error("Error adding customer", error);
      });
  };

  const editCustomer = (customer) => {
    setEditingCustomer(customer);
    setNewCustomerName(customer.name);
  };

  const saveEditedCustomer = () => {
    if (newCustomerName.trim() === "") {
      alert("Please enter a customer name.");
      return;
    }

    fetch(`https://jsonplaceholder.typicode.com/users/${editingCustomer.id}`, {
      method: "PUT",
      body: JSON.stringify({ ...editingCustomer, name: newCustomerName }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then(() => {
        const updatedCustomers = customers.map((c) =>
          c.id === editingCustomer.id ? { ...c, name: newCustomerName } : c
        );
        setCustomers(updatedCustomers);
        setEditingCustomer(null);
        setNewCustomerName("");
      })
      .catch((error) => {
        console.error("Error updating customer", error);
      });
  };

  const cancelEdit = () => {
    setEditingCustomer(null);
    setNewCustomerName("");
  };

  const deleteCustomer = (customer) => {
    fetch(`https://jsonplaceholder.typicode.com/users/${customer.id}`, {
      method: "DELETE",
    })
      .then(() => {
        const updatedCustomers = customers.filter((c) => c.id !== customer.id);
        setCustomers(updatedCustomers);
      })
      .catch((error) => {
        console.error("Error deleting customer", error);
      });
  };

  return (
    <>
      <Hero
        title={"Clients"}
        subTitle={"Our customers that are satisfied"}
        src={"usersHero"}
      />
      <div className="min-h-screen bg-gray-100">
        <div className="container mx-auto p-4 flex flex-col h-full">
          <h2 className="text-4xl font-bold text-gray-800 mb-4 pt-20">
            Users that I've worked with
          </h2>

          <div className="mb-4">
            <input
              type="text"
              className="border rounded p-2 w-1/2"
              placeholder="Enter customer name"
              value={newCustomerName}
              onChange={(e) => setNewCustomerName(e.target.value)}
            />
            {editingCustomer ? (
              <div className="mt-2">
                <button
                  className="bg-blue-500 text-white p-2 rounded mr-2"
                  onClick={saveEditedCustomer}
                >
                  Save
                </button>
                <button
                  className="bg-gray-400 p-2 rounded"
                  onClick={cancelEdit}
                >
                  Cancel
                </button>
              </div>
            ) : (
              <button
                className="bg-blue-500 text-white p-2 rounded mt-2"
                onClick={addCustomer}
              >
                Add Customer
              </button>
            )}
          </div>

          <ul className="flex-grow overflow-auto">
            {customers.map((customer) => (
              <li
                key={customer.id}
                className="flex items-center justify-between mb-2"
              >
                {editingCustomer && editingCustomer.id === customer.id ? (
                  <input
                    type="text"
                    className="border rounded p-2 w-1/2"
                    value={newCustomerName}
                    onChange={(e) => setNewCustomerName(e.target.value)}
                  />
                ) : (
                  customer.name
                )}
                <div>
                  <button
                    className="bg-blue-500 text-white p-2 rounded mr-2"
                    onClick={() => editCustomer(customer)}
                  >
                    Edit
                  </button>
                  <button
                    className="bg-red-500 text-white p-2 rounded"
                    onClick={() => deleteCustomer(customer)}
                  >
                    Delete
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Posts;
