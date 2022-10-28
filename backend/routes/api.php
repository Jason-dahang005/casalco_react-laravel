<?php

// AUTH CONTROLLER START
use App\Http\Controllers\API\auth\AuthController;
// AUTH CONTROLLER END

// OFFICER CONTROLLER START 
use App\Http\Controllers\API\officer\DashboardController;
// OFFICER CONTROLLER END


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

// ATHENTICATION ROUTE START =============================================================
Route::post('register', [AuthController::class, 'register']);
Route::post('login', [AuthController::class, 'login']);
// ATHENTICATION ROUTE END ===============================================================

// ADMIN ROUTES START ====================================================================
Route::middleware(['auth:sanctum', 'isAdmin'])->group(function () {

    Route::get('/checkingAuthenticated', function() {
        return response()->json([
            'message'   => 'admin logged in',
            'status'    => 200
        ], 200);
    });

    Route::post('logout', [AuthController::class, 'logout']);
});
// ADMIN ROUTES END ======================================================================

// OFFICER ROUTE START ===================================================================
Route::middleware(['auth:sanctum', 'isOfficer'])->group(function () {

    Route::get('/checkingOfficer', function() {
        return response()->json([
            'status'    => 200,
            'message'   => 'admin logged in'
        ], 200);
    });

    Route::apiResource('officer-dashboard', DashboardController::class);
});
// OFFICER ROUTE END =====================================================================

// MEMBER ROUTE START ====================================================================
Route::middleware(['auth:sanctum'])->group(function () {
    Route::post('logout', [AuthController::class, 'logout']);
});
// MEMBER ROUTE END ======================================================================


Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

// MEMBERSHIP APPLICATION ROUTE START ====================================================
Route::apiResource('membership', MembershipController::class);
// MEMBERSHIP APPLICATION ROUTE END ======================================================
