<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Membership extends Model
{
    use HasFactory;

    protected $table = 'memberships';

    protected $fillable = [
        'fname',
        'mname',
        'lname',
        'image',
        'membereship',


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
