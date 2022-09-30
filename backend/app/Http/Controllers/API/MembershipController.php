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
			//
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
			'fname' => 'required',
			'mname' => 'required',
			'lname' => 'required'
	]);

	if($validator->fails()){
			return response()->json([
					'status' => 400,
					'errors' => $validator->messages()
			]);
	}else{
			$example = new Membership();
			$example->Fname = $request->fname;
			$example->Mname = $request->mname;
			$example->Lname = $request->lname;
			$example->save();
			return response()->json([
					'status' => 200,
					'message' => 'yehey!! added'
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
		$membership = Membership::find($id);
		$membership->is_approved = $request->is_approved;
		$membership->acc_id = $request->acc_id;
		$membership->or_no = $request->or_no;
		$membership->save();
		
		return response()->json ([
				'status' => 200,
				'message'=> 'Membership Application Updated Successfully'
		]);
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
