<?php

namespace App\Http\Controllers\API;
use App\Models\Membership;
use App\Models\Beneficiary;
use App\Models\Spouse;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

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
    public function store(Request $r)
    {
    //     $validator = Validator::make($r->all(),[
    //         'Fname'=> 'required|max:191',
    //         'email'=> 'required|max:191',
    //         'unit'=> 'required|max: 191'
    //     ]);
    //     if ($validator->fails())
    //     {
    //         return response()->json([
    //             'status'=> 400,
    //             'errors'=> $validator->messages(),
    //         ]);
    //     }
    //     else
    //   {  
        $m = new Membership();
        $m->Fname = $r->fname;
        $m->Mname = $r->mname;
        $m->Lname = $r->lname;
        $m->suffix = $r->suffix;
        $m->gender = $r->gender;
        $m->dob = $r->dob;
        $m->Bplace = $r->bplace;
        $m->address = $r->address;
        $m->unit = $r->unit;
        $m->occupation = $r->occupation;
        $m->educ = $r->educ;
        $m->civilStatus = $r->civil;
        $m->religion = $r->religion;
        $m->MI = $r->m_income;
        $m->contactNum = $r->contact;
        $m->TIN = $r->tin;
        $m->SSSnum = $r->sss;
        $m->email = $r->email;
        $m->NumDependents = $r->dependents;
        $m->membership_type = 1;
        $m->save();
        // return response()->json ([
        //     'status' => 200,
        //     'message'=> 'Membership Added Successfully'
        // ]);

        $b = new Beneficiary();
        $b->membership_id = $m->id;
        $b->benName = $r->b_name;
        $b->benRelation = $r->b_relationship;
        $b->benAge = $r->b_age;
        $b->benAddress = $r->b_address;
        $b->benMothersLname = $r->b_mother_lname;
        $b->benMothersFname = $r->b_mother_fname;
        $b->benMothersMname = $r->b_mother_mname;
        $b->save();
        // // return response()->json ([
        // //     'status' => 200,
        // //     'message'=> 'Benificiary Added Successfully'
        // // ]);

        $s = new Spouse();
        $s->membership_id = $m->id;
        $s->spouseFname = $r->s_name;
        $s->spouseAge = $r->s_age;
        $s->spouseOcc = $r->s_occupation;
        $s->spouseMI = $r->s_m_income;
        $s->spouseEmplrName = $r->s_emp_name;
        $s->spouseConNum = $r->s_contact;
        $s->save();
        return response()->json ([
            'status' => 200,
            'message'=> 'Membership Application Added Successfully'
        ]);
        // }

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
