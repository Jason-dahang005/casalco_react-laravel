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
			//Personal info
			'fname'					=> 'required',
			'mname'					=> 'required',
			'lname'					=> 'required',
			'gender'				=> 'required',
			'dob'					=> 'required',
			'bplace'				=> 'required',
			'address'				=> 'required',
			'unit'					=> 'required',
			'occupation'			=> 'required',
			'educ'					=> 'required',
			'm_income'				=> 'required',
			'civil'					=> 'required',
			'religion'				=> 'required',
			'contact'				=> 'required',
			'email'					=> 'required',
			'dependents'			=> 'required',
			'mother'				=> 'required',

			//Spouse
			// 's_name'				=> 'required',
			// 's_age'					=> 'required',
			// 's_occupation'			=> 'required',
			// 's_m_income'			=> 'required',
			// 's_emp_name' 			=> 'required',
			// 's_contact'				=> 'required',
			// 's_mother' 				=> 'required',

			//Beneficiary
			// 'b_name'				=> 'required',
			// 'b_relationship'		=> 'required',
			// 'b_age'					=> 'required',
			// 'b_address'				=> 'required',

	]);

	if($validator->fails()){
			return response()->json([
					'status' => 400,
					'errors' => $validator->messages()
			]);
	}else{
			$example = new Membership();
			$example->Fname								= 			$request->fname;
			$example->Mname 							= 			$request->mname;
			$example->Lname 							= 			$request->lname;
			$example->suffix 							=     		$request->suffix;
			$example->gender 							=     		$request->gender;
			$example->dob								=			$request->dob;
			$example->Bplace							=			$request->bplace;
			$example->address							=			$request->address;
			$example->unit								=			$request->unit;
			$example->occupation						=			$request->occupation;
			$example->educ								=			$request->educ;
			$example->MI								=			$request->m_income;
			$example->civilStatus						=			$request->civil;
			$example->religion							=			$request->religion;
			$example->contactNum						=			$request->contact;
			$example->email								=			$request->email;
			$example->NUmDependents						=			$request->dependents;
			$example->mother							=			$request->mother;
			$example->save();
			

			$spouse = new Spouse();
			$spouse->membership_id						=			$example->id;
			$spouse->spouseFname						= 			$request->s_name;
			$spouse->spouseAge 							= 			$request->s_age;
			$spouse->spouseOcc 							= 			$request->s_occupation;
			$spouse->spouseMI 							=     		$request->s_m_income;
			$spouse->spouseEmplrName 					=     		$request->s_emp_name;
			$spouse->spouseConNum						=			$request->s_contact;
			$spouse->mothers_name						=			$request->s_mother;
			$spouse->save();


			$ben = new Beneficiary();
			$ben->membership_id						=			$example->id;
			$ben->benName								= 			$request->b_name;
			$ben->benrelation 							= 			$request->b_relationship;
			$ben->benAge 								= 			$request->b_age;
			$ben->benAddress 							=     		$request->b_address;
			
			$ben->save();

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
