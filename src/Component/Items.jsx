import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Typography,
  Snackbar,
  Alert,
  TextField,
  CircularProgress,
  Button,
} from "@mui/material";

export default function Items() {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [sortConfig, setSortConfig] = useState({ key: "", direction: "" });
  const [filterText, setFilterText] = useState("");
  const [snackbar, setSnackbar] = useState({ open: false, message: "", severity: "success" });

  // Fetch data from the API
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("https://fakestoreapi.com/products");
        setProducts(response.data);
        setFilteredProducts(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching products:", error);
        setSnackbar({ open: true, message: "Error fetching products.", severity: "error" });
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  // Sorting logic
  const handleSort = (key) => {
    let direction = "asc";
    if (sortConfig.key === key && sortConfig.direction === "asc") {
      direction = "desc";
    }
    setSortConfig({ key, direction });

    const sortedProducts = [...filteredProducts].sort((a, b) => {
      if (a[key] < b[key]) return direction === "asc" ? -1 : 1;
      if (a[key] > b[key]) return direction === "asc" ? 1 : -1;
      return 0;
    });

    setFilteredProducts(sortedProducts);
  };

  // Filtering logic
  const handleFilter = (event) => {
    const value = event.target.value.toLowerCase();
    setFilterText(value);
    const filtered = products.filter(
      (product) =>
        product.title.toLowerCase().includes(value) ||
        product.category.toLowerCase().includes(value) ||
        product.description.toLowerCase().includes(value)
    );
    setFilteredProducts(filtered);
  };

  return (
    <div
      style={{
        backgroundColor: "#f9f9f9",
        minHeight: "100vh",
        padding: "20px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Typography
        variant="h2"
        component="h1"
        style={{
          color: "#3f51b5",
          textAlign: "center",
          marginBottom: "30px",
          fontWeight: "bold",
        }}
      >
        Products List
      </Typography>

      <div style={{ width: "90%", marginBottom: "20px", display: "flex", justifyContent: "space-between" }}>
        <TextField
          label="Filter Products"
          variant="outlined"
          value={filterText}
          onChange={handleFilter}
          fullWidth
          style={{ marginRight: "10px" }}
        />
      </div>

      {loading ? (
        <CircularProgress />
      ) : (
        <div style={{ width: "90%" }}>
          <TableContainer
            component={Paper}
            style={{
              boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
              borderRadius: "8px",
              overflow: "hidden",
            }}
          >
            <Table>
              <TableHead style={{ backgroundColor: "#3f51b5" }}>
                <TableRow>
                  <TableCell
                    style={{ fontWeight: "bold", color: "#ffffff", cursor: "pointer", textAlign: "center" }}
                    onClick={() => handleSort("title")}
                  >
                    Title {sortConfig.key === "title" ? (sortConfig.direction === "asc" ? "▲" : "▼") : ""}
                  </TableCell>
                  <TableCell
                    style={{ fontWeight: "bold", color: "#ffffff", cursor: "pointer", textAlign: "center" }}
                    onClick={() => handleSort("price")}
                  >
                    Price {sortConfig.key === "price" ? (sortConfig.direction === "asc" ? "▲" : "▼") : ""}
                  </TableCell>
                  <TableCell style={{ fontWeight: "bold", color: "#ffffff", textAlign: "center" }}>
                    Description
                  </TableCell>
                  <TableCell
                    style={{ fontWeight: "bold", color: "#ffffff", cursor: "pointer", textAlign: "center" }}
                    onClick={() => handleSort("category")}
                  >
                    Category {sortConfig.key === "category" ? (sortConfig.direction === "asc" ? "▲" : "▼") : ""}
                  </TableCell>
                  <TableCell style={{ fontWeight: "bold", color: "#ffffff", textAlign: "center" }}>
                    Image
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {filteredProducts.map((product, index) => (
                  <TableRow
                    key={product.id}
                    style={{
                      backgroundColor: index % 2 === 0 ? "#f5f5f5" : "#ffffff",
                    }}
                  >
                    <TableCell style={{ textAlign: "center" }}>{product.title}</TableCell>
                    <TableCell style={{ textAlign: "center" }}>
                      ${Number(product.price).toFixed(2)}
                    </TableCell>
                    <TableCell style={{ textAlign: "center" }}>{product.description}</TableCell>
                    <TableCell style={{ textAlign: "center" }}>{product.category}</TableCell>
                    <TableCell style={{ textAlign: "center" }}>
                      <img
                        src={product.image}
                        alt={product.title}
                        style={{
                          width: "50px",
                          height: "50px",
                          objectFit: "cover",
                          borderRadius: "4px",
                          border: "1px solid #ddd",
                        }}
                      />
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      )}

      <Snackbar
        open={snackbar.open}
        autoHideDuration={3000}
        onClose={() => setSnackbar({ ...snackbar, open: false })}
      >
        <Alert
          onClose={() => setSnackbar({ ...snackbar, open: false })}
          severity={snackbar.severity}
          sx={{ width: "100%" }}
        >
          {snackbar.message}
        </Alert>
      </Snackbar>
    </div>
  );
}
