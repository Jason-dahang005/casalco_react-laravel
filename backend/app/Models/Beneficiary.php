<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Beneficiary extends Model
{
    use HasFactory;

    protected $fillable = [
        'membership_id',
        'b_name',
        'b_relationship',
        'b_age',
        'b_address',
        
    ];
}
