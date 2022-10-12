<?php

namespace App\Http\Controllers\API\auth;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Hash;
use App\Models\User;

class AuthController extends Controller
{
  public function register(Request $r){
    $validator = Validator::make($r->all(), [
      'id_no'         =>    'required|unique:users,id_no',
      'firstname'     =>    'required',
      'lastname'      =>    'required',
      'email'         =>    'required|unique:users,email',
      'password'      =>    'required'
    ]);

    if ($validator->fails()) {
      return response()->json([
        'validation_errors' => $validator->messages(),
      ]);
    }else{
      $user = User::create([
        'id_no'        =>  $r->id_no,
        'firstname'    =>  $r->firstname,
        'lastname'     =>  $r->lastname,
        'email'        =>  $r->email,
        'password'     =>  Hash::make($r->password),
      ]);

      $token = $user->createToken($user->id_no.'_Token')->plainTextToken;

      return response()->json([
        'status'    => 200,
        'name'      => $user->firstname,
        'token'     => $token,
        'message'   => 'Registered Successfully!'
      ]);
    }
  }

  public function login(Request $r){
    $validator = Validator::make($r->all(), [
      'email'         =>    'required',
      'password'      =>    'required'
    ]);

    if ($validator->fails()) {
      return response()->json([
        'validation_errors' => $validator->messages(),
      ]);
    }else{
      $user = User::where('email', $r->email)->first();
      if(! $user || ! Hash::check($r->password, $user->password)){
        return response()->json([
          'status'    => 401,
          'message'   => 'Invalid credentials'
        ]);
      }else{
        $token = $user->createToken($user->email.'_Token')->plainTextToken;

        return response()->json([
          'status'        => 200,
          'firstname'     => $user->firstname,
          'lastname'      => $user->lastname,
          'token'         => $token,
          'message'       => 'Logged in successfully'
        ]);
      }
    }
  }

  public function logout(){
    auth()->user()->tokens()->delete();
    return response()->json([
      'status'      => 200,
      'message'     => 'Logged out successfully'
    ]);
  }
}
