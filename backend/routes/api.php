<?php

// AUTH CONTROLLER START
use App\Http\Controllers\API\auth\AuthController;
// AUTH CONTROLLER END


use App\Http\Controllers\API\ExampleController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\API\MembershipController;

use App\Http\Controllers\AuthLoginController;
/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::post('register', [AuthController::class, 'register']);
Route::post('login', [AuthController::class, 'login']);

Route::middleware(['auth:sanctum'])->group(function () {
    Route::get('/checkingAuthenticated', function() {
        return response()->json([
            'message'   => 'you are in',
            'status'    => 200
        ], 200);
    });

    Route::post('logout', [AuthController::class, 'logout']);
});

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});


Route::apiResource('membership', MembershipController::class);
Route::apiResource('PUT', MembershipController::class);
Route::get('edit-membership/{id}', [MembershipController::class, 'edit']);
Route::put('update-membership/{id}', [MembershipController::class, 'update']);

Route::apiResource('example', ExampleController::class);
