import React from 'react'
import Navbar from '../../components/Navbar'
import MealTable from '../../components/MealTable'

const MealChart = () => {

  const mealChart= [
    {
      "day": "Monday",
      "breakfast": "Oatmeal with fruits",
      "lunch": "Grilled chicken salad",
      "snacks": "Greek yogurt with almonds",
      "dinner": "Spaghetti Bolognese"
    },
    {
      "day": "Tuesday",
      "breakfast": "Avocado toast with eggs",
      "lunch": "Quinoa and vegetable stir-fry",
      "snacks": "Fresh fruit smoothie",
      "dinner": "Salmon with roasted vegetables"
    },
    {
      "day": "Wednesday",
      "breakfast": "Whole grain pancakes with maple syrup",
      "lunch": "Turkey and avocado wrap",
      "snacks": "Hummus with carrot sticks",
      "dinner": "Vegetarian lasagna"
    },
    {
      "day": "Thursday",
      "breakfast": "Smoothie bowl with granola",
      "lunch": "Caprese sandwich",
      "snacks": "Mixed nuts",
      "dinner": "Grilled shrimp with quinoa"
    },
    {
      "day": "Friday",
      "breakfast": "Yogurt parfait with berries",
      "lunch": "Pesto pasta with cherry tomatoes",
      "snacks": "Cheese and whole grain crackers",
      "dinner": "Chicken fajitas"
    },
    {
      "day": "Saturday",
      "breakfast": "Egg and spinach breakfast burrito",
      "lunch": "Mediterranean couscous salad",
      "snacks": "Apple slices with peanut butter",
      "dinner": "Beef and vegetable stir-fry"
    },
    {
      "day": "Sunday",
      "breakfast": "French toast with syrup",
      "lunch": "Caesar salad with grilled chicken",
      "snacks": "Trail mix",
      "dinner": "Vegetable curry with rice"
    }
  ]

  return (
    <>
    <Navbar />
    <MealTable mealChart={mealChart} />
    </>
  )
}

export default MealChart