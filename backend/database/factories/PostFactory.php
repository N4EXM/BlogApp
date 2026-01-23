<?php

namespace Database\Factories;

use App\Models\Category;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Post>
 */
class PostFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'title' => fake()->sentence(),
            'slug' => fake()->sentence(),
            'date' => fake()->dateTimeBetween('-5 years', '2 years'),
            'category_id' => Category::inRandomOrder()->first()->id,
            'user_id' => 2
        ];
    }
}
