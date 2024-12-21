import {
  TextField,
  Button,
  Container,
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
  CircularProgress,
} from "@mui/material";
import { useState, useEffect } from "react";
import axios from "axios";

export default function Categories() {
  const [categoryName, setCategoryName] = useState("");
  const [categories, setCategories] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [snackbar, setSnackbar] = useState({ open: false, message: "", severity: "" });

  // Fetch categories from API
  useEffect(() => {
    const fetchCategories = async () => {
      setIsLoading(true);
      try {
        const response = await axios.get("https://fakestoreapi.com/products/categories");
        setCategories(
          response.data.map((category, index) => ({
            id: index + 1,
            name: category,
            ImageName: "",
          }))
        );
      } catch (error) {
        showSnackbar("Failed to load categories from API!", "error");
      } finally {
        setIsLoading(false);
      }
    };
    fetchCategories();
  }, []);

  // Snackbar methods
  const showSnackbar = (message, severity) => {
    setSnackbar({ open: true, message, severity });
  };

  const handleCloseSnackbar = () => {
    setSnackbar({ open: false, message: "", severity: "" });
  };

  // Add category
  const handleAddCategory = () => {
    if (!categoryName.trim()) {
      showSnackbar("Category name cannot be empty!", "error");
      return;
    }

    if (categories.some((category) => category.name.toLowerCase() === categoryName.toLowerCase())) {
      showSnackbar("Category already exists!", "warning");
      return;
    }

    setCategories([
      ...categories,
      { id: categories.length + 1, name: categoryName.trim(), ImageName: "" },
    ]);
    setCategoryName("");
    showSnackbar("Category added successfully!", "success");
  };

  // Delete category
  const handleDeleteCategory = (id) => {
    setCategories(categories.filter((category) => category.id !== id));
    showSnackbar("Category deleted successfully!", "info");
  };

  // Edit category
  const handleEditCategory = (id) => {
    const updatedCategories = categories.map((category) =>
      category.id === id ? { ...category, name: `${category.name} (Updated)` } : category
    );
    setCategories(updatedCategories);
    showSnackbar("Category updated successfully!", "success");
  };

  return (
    <Container maxWidth="md" sx={{ mt: 4, textAlign: "center" }}>
      <Typography variant="h4" gutterBottom sx={{ fontWeight: "bold", mb: 3 }}>
        Categories Management
      </Typography>

      {/* Add Category */}
      <div style={{ display: "flex", gap: "10px", justifyContent: "center", marginBottom: "20px" }}>
        <TextField
          label="Category Name"
          variant="outlined"
          value={categoryName}
          onChange={(e) => setCategoryName(e.target.value)}
          placeholder="Enter new category name"
          size="small"
          sx={{
            width: 300,
            "& .MuiOutlinedInput-root:hover fieldset": {
              borderColor: "#66bb6a",
            },
          }}
        />
        <Button
          variant="contained"
          color="success"
          onClick={handleAddCategory}
          sx={{
            height: 40,
            backgroundColor: "#66bb6a",
            "&:hover": { backgroundColor: "#43a047" },
          }}
        >
          Add Category
        </Button>
      </div>

      {/* Loading and Table */}
      {isLoading ? (
        <CircularProgress />
      ) : (
        <TableContainer component={Paper} sx={{ boxShadow: 3, borderRadius: 2 }}>
          <Table sx={{ minWidth: 650 }}>
            <TableHead>
              <TableRow>
                <TableCell sx={{ fontWeight: "bold", backgroundColor: "#4db6ac", color: "white" }}>
                  Category Name
                </TableCell>
                <TableCell align="right" sx={{ fontWeight: "bold", backgroundColor: "#4db6ac", color: "white" }}>
                  Image
                </TableCell>
                <TableCell align="right" sx={{ fontWeight: "bold", backgroundColor: "#81c784", color: "white" }}>
                  Edit
                </TableCell>
                <TableCell align="right" sx={{ fontWeight: "bold", backgroundColor: "#e57373", color: "white" }}>
                  Delete
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {categories.map((category) => (
                <TableRow key={category.id}>
                  <TableCell sx={{ fontWeight: "bold", color: "#37474f" }}>{category.name}</TableCell>
                  <TableCell align="right">
                    <img
                      src={category.ImageName || "https://via.placeholder.com/50"}
                      alt={category.name}
                      style={{ width: 50, height: 50, objectFit: "contain" }}
                    />
                  </TableCell>
                  <TableCell align="right">
                    <Button
                      variant="outlined"
                      color="primary"
                      onClick={() => handleEditCategory(category.id)}
                      size="small"
                      sx={{
                        borderColor: "#64b5f6",
                        color: "#64b5f6",
                        "&:hover": { backgroundColor: "#bbdefb" },
                      }}
                    >
                      Edit
                    </Button>
                  </TableCell>
                  <TableCell align="right">
                    <Button
                      variant="outlined"
                      color="error"
                      onClick={() => handleDeleteCategory(category.id)}
                      size="small"
                      sx={{
                        borderColor: "#e57373",
                        color: "#e57373",
                        "&:hover": { backgroundColor: "#ffcdd2" },
                      }}
                    >
                      Delete
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}

      {/* Snackbar */}
      <Snackbar open={snackbar.open} autoHideDuration={3000} onClose={handleCloseSnackbar}>
        <Alert onClose={handleCloseSnackbar} severity={snackbar.severity} sx={{ width: "100%" }}>
          {snackbar.message}
        </Alert>
      </Snackbar>
    </Container>
  );
}
