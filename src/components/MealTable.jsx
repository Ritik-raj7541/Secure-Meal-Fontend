import React from 'react'

const MealTable = ({ mealChart }) => {
    return (
        <div className='py-12'>
            <table>
                <thead>
                    <tr>
                        <th>Day</th>
                        <th>Breakfast</th>
                        <th>Lunch</th>
                        <th>Snacks</th>
                        <th>Dinner</th>
                    </tr>
                </thead>
                <tbody>
                    {mealChart.map((meal, index) => (
                        <tr key={index} className={index % 2 === 0 ? 'even' : 'odd'}>
                            <th>{meal.day}</th>
                            <td>{meal.breakfast}</td>
                            <td>{meal.lunch}</td>
                            <td>{meal.snacks}</td>
                            <td>{meal.dinner}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>

    );

}

export default MealTable