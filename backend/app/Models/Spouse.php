<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Spouse extends Model
{
    use HasFactory;

    protected $fillable = [
        'membership_id',
        's_name',
        's_age',
        's_occupation',
        's_m_income',
        's_emp_name',
        's_contact',
    ];
}
