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
			'fname' => 'required|string',
			'mname' => 'required|string',
			'lname' => 'required|string',
			'image' => 'required'
	]);

	if($validator->fails()){
			return response()->json([
					'status' => 422,
					'errors' => $validator->messages()
			]);
	}else{
			$m = new Membership();
			$m->Fname								= 			$request->fname;
			$m->Mname 							= 			$request->mname;
			$m->Lname 							= 			$request->lname;
			$m->membership					=				0;

			$file = $request->file('pic');
			$extension	= $file->getClientOriginalExtension();
			$filename = time().'.'.$extension;
			$file->move('uploads/pic', $filename);
			$m->image = 'uploads/pic'.$filename;
			
			$m->save();

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
			$membership= Membership::find($id);

			if ($membership){
				return response()->json([
					'status' => 200,
					'membership' => $membership
			]);
			}
			else
			{
				return response()->json ([
					'status' => 404,
					'message'=> 'Membership ID not found'
			]);
			}

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
		$validator = Validator::make($request->all(),[
				'is_approved' => 'required',
				'acc_id'      => 'required',
				'or_no'   	  => 'required',
		]);

		if($validator->fails()){
			return response()->json([
					'status' => 400,
					'errors' => $validator->messages()
			]);
		}else{

			$membership = Membership::find($id);
			if($membership){

				$membership->is_approved = $request->is_approved;
				$membership->acc_id = $request->acc_id;
				$membership->or_no = $request->or_no;
				$membership->save();
				
				return response()->json ([
						'status' => 200,
						'message'=> 'Membership Application Updated Successfully'
				]);

			}
			else
			{
				return response()->json ([
					'status' => 404,
					'message'=> 'Membership ID not found'
			]);
			}
				
		}

		
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
