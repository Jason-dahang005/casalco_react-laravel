<?php

namespace App\Http\Controllers\API;
use App\Models\Membership;
use App\Models\Beneficiary;
use App\Models\Spouse;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use App\Models\Example;

class MembershipController extends Controller
{
	/**
	 * Display a listing of the resource.
	 *
	 * @return \Illuminate\Http\Response
	 */
	public function index()
	{
			$m = Membership::orderBy('created_at', 'desc')->where('status', 0)->get();
			return response()->json([
				'status'		=> 200,
				'm'					=> $m
			]);
	}

	/**
	 * Show the form for creating a new resource.
	 *
	 * @return \Illuminate\Http\Response
	 */
	public function create()
	{
			//
	}

	/**
	 * Store a newly created resource in storage.
	 *
	 * @param  \Illuminate\Http\Request  $request
	 * @return \Illuminate\Http\Response
	 */
	public function store(Request $request)
	{
		$validator = Validator::make($request->all(), [
			'firstname'		=> 'required',
			'image'				=> 'required'
		]);

		if($validator->fails()){
			return response()->json([
				'status'		=> 422,
				'errors'		=>$validator->messages()
			]);
		}else{
			$m 									= new Membership;
			$m->firstname				= $request->firstname;

			$file = $request->file('image');
			$extension  = $file->getClientOriginalExtension();
			$filename = time().'.'.$extension;
			$file->move('membership/selfie/',$filename);
			$m->image	= 'membership/selfie/'.$filename;

			$m->save();

			return response()->json([
				'status'		=> 200,
				'message'		=> 'Added Successfully!'
			]);
		}
	}


	/**
	 * Display the specified resource.
	 *
	 * @param  int  $id
	 * @return \Illuminate\Http\Response
	 */
	public function show($id)
	{
			//
	}

	/**
	 * Show the form for editing the specified resource.
	 *
	 * @param  int  $id
	 * @return \Illuminate\Http\Response
	 */
	public function edit($id)
	{	
		//
	}

	/**
	 * Update the specified resource in storage.
	 *
	 * @param  \Illuminate\Http\Request  $request
	 * @param  int  $id
	 * @return \Illuminate\Http\Response
	 */
	public function update(Request $request, $id)
	{
		//
	}

	/**
	 * Remove the specified resource from storage.
	 *
	 * @param  int  $id
	 * @return \Illuminate\Http\Response
	 */
	public function destroy($id)
	{
			//
	}
}
