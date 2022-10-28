<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Membership extends Model
{
    use HasFactory;

    protected $table = 'memberships';

    protected $fillable = [
        'firstname',
        'image'
    ];

    public function Beneficiary(){
        return $this->hasMany(Beneficiary::class);
    }

    public function spouse(){
        return $this->hasOne(Spouse::class);
    }
}
