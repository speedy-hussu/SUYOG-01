import * as React from "react";
import { ingredientColumns, type Ingredient } from "./IngredientColumns";
import Layout from "../Layout";
import { DataTable } from "@/components/common/data-table";
import { Combobox } from "@/components/common/SelectCombobox";
import { CustomerFormModal } from "@/components/forms/CustomerFormModal";
import { Button } from "@/components/ui/button";
import { FileUp } from "lucide-react";

export default function IngredientMaster() {
  const ingredientData: Ingredient[] = [
    {
      id: "1A3F",
      ingredient_name: "Tomatoes",
      category: "Vegetable",
      stock: "10 kg",
      cost_per_unit: 30,
    },
    {
      id: "B2C8",
      ingredient_name: "Onions",
      category: "Vegetable",
      stock: "8 kg",
      cost_per_unit: 25,
    },
    {
      id: "4D91",
      ingredient_name: "Rice",
      category: "Grain",
      stock: "25 kg",
      cost_per_unit: 50,
    },
    {
      id: "E6A5",
      ingredient_name: "Cooking Oil",
      category: "Grocery",
      stock: "5 L",
      cost_per_unit: 120,
    },
    {
      id: "7F02",
      ingredient_name: "Salt",
      category: "Grocery",
      stock: "3 kg",
      cost_per_unit: 15,
    },
    {
      id: "83B4",
      ingredient_name: "Sugar",
      category: "Grocery",
      stock: "7 kg",
      cost_per_unit: 45,
    },
    {
      id: "C9D6",
      ingredient_name: "Flour",
      category: "Grain",
      stock: "12 kg",
      cost_per_unit: 40,
    },
    {
      id: "5E7A",
      ingredient_name: "Butter",
      category: "Dairy",
      stock: "1 kg",
      cost_per_unit: 200,
    },
    {
      id: "F013",
      ingredient_name: "Milk",
      category: "Dairy",
      stock: "15 L",
      cost_per_unit: 60,
    },
    {
      id: "29B8",
      ingredient_name: "Eggs",
      category: "Dairy",
      stock: "30 pcs",
      cost_per_unit: 8,
    },
    {
      id: "6C4D",
      ingredient_name: "Chicken Breast",
      category: "Meat",
      stock: "5 kg",
      cost_per_unit: 180,
    },
    {
      id: "D7E9",
      ingredient_name: "Garlic",
      category: "Vegetable",
      stock: "2 kg",
      cost_per_unit: 40,
    },
    {
      id: "3A8F",
      ingredient_name: "Potatoes",
      category: "Vegetable",
      stock: "15 kg",
      cost_per_unit: 20,
    },
    {
      id: "B501",
      ingredient_name: "Carrots",
      category: "Vegetable",
      stock: "6 kg",
      cost_per_unit: 35,
    },
    {
      id: "9E2C",
      ingredient_name: "Bell Peppers",
      category: "Vegetable",
      stock: "4 kg",
      cost_per_unit: 80,
    },
    {
      id: "4F7B",
      ingredient_name: "Pasta",
      category: "Grain",
      stock: "8 kg",
      cost_per_unit: 55,
    },
    {
      id: "C1A9",
      ingredient_name: "Cheese",
      category: "Dairy",
      stock: "3 kg",
      cost_per_unit: 220,
    },
    {
      id: "8D36",
      ingredient_name: "Yogurt",
      category: "Dairy",
      stock: "6 L",
      cost_per_unit: 45,
    },
    {
      id: "2E4A",
      ingredient_name: "Lemon",
      category: "Fruit",
      stock: "12 pcs",
      cost_per_unit: 15,
    },
    {
      id: "F7B1",
      ingredient_name: "Ginger",
      category: "Vegetable",
      stock: "1 kg",
      cost_per_unit: 120,
    },
    {
      id: "5C8D",
      ingredient_name: "Green Beans",
      category: "Vegetable",
      stock: "3 kg",
      cost_per_unit: 65,
    },
    {
      id: "A9F2",
      ingredient_name: "Beef",
      category: "Meat",
      stock: "4 kg",
      cost_per_unit: 280,
    },
    {
      id: "3B6E",
      ingredient_name: "Pork",
      category: "Meat",
      stock: "3 kg",
      cost_per_unit: 240,
    },
    {
      id: "D405",
      ingredient_name: "Fish",
      category: "Seafood",
      stock: "6 kg",
      cost_per_unit: 190,
    },
    {
      id: "7E9C",
      ingredient_name: "Shrimp",
      category: "Seafood",
      stock: "2 kg",
      cost_per_unit: 320,
    },
    {
      id: "1F8A",
      ingredient_name: "Lentils",
      category: "Grain",
      stock: "7 kg",
      cost_per_unit: 85,
    },
    {
      id: "B3D7",
      ingredient_name: "Chickpeas",
      category: "Grain",
      stock: "5 kg",
      cost_per_unit: 75,
    },
    {
      id: "6A2F",
      ingredient_name: "Spinach",
      category: "Vegetable",
      stock: "4 kg",
      cost_per_unit: 50,
    },
    {
      id: "E8C4",
      ingredient_name: "Mushrooms",
      category: "Vegetable",
      stock: "3 kg",
      cost_per_unit: 95,
    },
    {
      id: "9B51",
      ingredient_name: "Broccoli",
      category: "Vegetable",
      stock: "5 kg",
      cost_per_unit: 70,
    },
  ];
  const [categoryFilter, setCategoryFilter] = React.useState("");
  const categoryOptions = [
    { value: "", label: "All Categories" },
    { value: "Vegetable", label: "Vegetable" },
    { value: "Grain", label: "Grain" },
    { value: "Grocery", label: "Grocery" },
    { value: "Dairy", label: "Dairy" },
    { value: "Meat", label: "Meat" },
    { value: "Seafood", label: "Seafood" },
    { value: "Fruit", label: "Fruit" },
  ];
  const filter = (
    <Combobox
      options={categoryOptions}
      selectedValue={categoryFilter}
      onValueChange={setCategoryFilter}
    />
  );
  const headerActions = (
    <>
      <CustomerFormModal />
      <Button className="bg-white border border-gray-400 text-gray-600">
        Export
        <FileUp className="ml-2 h-4 w-4 text-gray-500" />
      </Button>
    </>
  );
  return (
    <Layout>
      <div className="p-6">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-2xl font-bold mb-4">Ingredient Table</h1>
        </div>

        <DataTable
          columns={ingredientColumns}
          globalFilterKeys={["ingredient_name", "id"]}
          placeholder="search by name or ID.."
          data={ingredientData.filter(
            (e) => !categoryFilter || e.category == categoryFilter
          )}
          filters={filter}
          headerActions={headerActions}
        />
      </div>
    </Layout>
  );
}
