import {S3_BUCKET, S3_URL} from "./constants.ts";
import {SDishImage} from "./schemas/SDishImage.ts";
import {SDish} from "./schemas/SDish.ts";
import {SChef} from "./schemas/SChef.ts";

export const getDishesImages = (): SDishImage[] => {
	return [
		{"name": "food-1", "image": S3_URL + S3_BUCKET + "/food-1.jpg"},
		{"name": "food-2", "image": S3_URL + S3_BUCKET + "/food-2.jpg"},
		{"name": "food-3", "image": S3_URL + S3_BUCKET + "/food-3.jpg"},
		{"name": "food-4", "image": S3_URL + S3_BUCKET + "/food-4.jpg"},
		{"name": "food-5", "image": S3_URL + S3_BUCKET + "/food-5.jpg"},
		{"name": "food-6", "image": S3_URL + S3_BUCKET + "/food-6.jpg"},
		{"name": "food-7", "image": S3_URL + S3_BUCKET + "/food-7.jpg"},
	]
}

export const getDishes = (): SDish[] => {
	const dishes: SDish[] = []
	for (let i = 1; i <= 6; i++) {
		dishes.push({
			"name": "Featured Meal",
			"image": S3_URL + S3_BUCKET + `/food-${i}.jpg`,
			"serving": "Served with french fries + drink",
			"description": "Choice of: Coke, Fanta, Sprite, Upgrade to large fries, Add whopper patty, Add Tender crisp patty and more...",
			"rate": Math.round((Math.random() * (5.0 - 3.0) + 3.0) * 10) / 10,  // от 3.0 до 5.0
			"reviews": Math.round((Math.random() * (25.0 - 5.0) + 5.0) * 1),  // от 5 до 25
		})
	}
	return dishes
}

export const getChefs = (): SChef[] => {
	const chefs: SChef[] = []
	chefs.push({
		"avatar": S3_URL + S3_BUCKET + "/chef-1.jpg",
		"name": "Gregory Flores",
		"position": "Chef of the cold",
		"dish1": S3_URL + S3_BUCKET + "/chef-1-dish-1.jpg",
		"dish2": S3_URL + S3_BUCKET + "/chef-1-dish-2.jpg",
		"dish3": S3_URL + S3_BUCKET + "/chef-1-dish-3.jpg"
	})
	chefs.push({
		"avatar": S3_URL + S3_BUCKET + "/chef-2.jpg",
		"name": "Annette Cooper",
		"position": "Chef of the hot",
		"dish1": S3_URL + S3_BUCKET + "/chef-2-dish-1.jpg",
		"dish2": S3_URL + S3_BUCKET + "/chef-2-dish-2.jpg",
		"dish3": S3_URL + S3_BUCKET + "/chef-2-dish-3.jpg"
	})
	chefs.push({
		"avatar": S3_URL + S3_BUCKET + "/chef-3.jpg",
		"name": "Greg Fox",
		"position": "Chef macro kitchen",
		"dish1": S3_URL + S3_BUCKET + "/chef-3-dish-1.jpg",
		"dish2": S3_URL + S3_BUCKET + "/chef-3-dish-2.jpg",
		"dish3": S3_URL + S3_BUCKET + "/chef-3-dish-3.jpg"
	})
	return chefs
}
