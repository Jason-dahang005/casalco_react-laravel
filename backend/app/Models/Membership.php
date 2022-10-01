<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Membership extends Model
{
    use HasFactory;

    protected $fillable = [
        'fname',
        'mname',
        'lname',
        'suffix',
        'gender',
        'dob',
        'bplace',
        'address',
        'unit',
        'occupation',
        'educ',
        'm_income',
        'civil',
        'religion',
        'contact',
        'tin',
        'sss',
        'email',
        'dependents',
        'is_approved',
        'acc_id',
        "or_no",
        'mother'


        // 'selfiepic',
        // 'empIDpic'
    ];

    public function Beneficiary(){
        return $this->hasMany(Beneficiary::class);
    }

    public function spouse(){
        return $this->hasOne(Spouse::class);
    }
}
