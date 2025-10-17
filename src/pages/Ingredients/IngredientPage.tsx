import { ingredientColumns, type Ingredient } from "./Columns";
import { IngredientDataTable } from "./DataTable";

export default function IngredientPage() {
  const data: Ingredient[] = [
    {
      id: "I001",
      ingredient_name: "Tomatoes",
      category: "Vegetable",
      stock: "10 kg",
      cost_per_unit: 30,
    },
    {
      id: "I002",
      ingredient_name: "Onions",
      category: "Vegetable",
      stock: "8 kg",
      cost_per_unit: 25,
    },
    {
      id: "I003",
      ingredient_name: "Rice",
      category: "Grain",
      stock: "25 kg",
      cost_per_unit: 50,
    },
    {
      id: "I004",
      ingredient_name: "Cooking Oil",
      category: "Grocery",
      stock: "5 L",
      cost_per_unit: 120,
    },
    {
      id: "I005",
      ingredient_name: "Salt",
      category: "Grocery",
      stock: "3 kg",
      cost_per_unit: 15,
    },
    {
      id: "I006",
      ingredient_name: "Sugar",
      category: "Grocery",
      stock: "7 kg",
      cost_per_unit: 45,
    },
    {
      id: "I007",
      ingredient_name: "Flour",
      category: "Grain",
      stock: "12 kg",
      cost_per_unit: 40,
    },
    {
      id: "I008",
      ingredient_name: "Butter",
      category: "Dairy",
      stock: "1 kg",
      cost_per_unit: 200,
    },
  ];

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold mb-4">Ingredient Table</h1>
      </div>

      <IngredientDataTable columns={ingredientColumns} data={data} />
    </div>
  );
}
