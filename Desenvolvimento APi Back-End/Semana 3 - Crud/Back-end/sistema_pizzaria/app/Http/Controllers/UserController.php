<?php

namespace App\Http\Controllers;

use App\Http\Requests\UserCreateRequest;
use App\Models\User;
use Illuminate\Http\Request;

/**
 * Class UserController
 *
 * @package App\Http\Controllers
 * @autor Filipe Mota Tocchio Rodrigues
 * @link https://github.com/filipetocchio/
 * @data 2024-08-30 12:33:00
 * @copyright UniEVANGÉLICA
 */
class UserController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $users = User::select('id', 'name', 'email')->paginate(2);

        return [
            'status' => 200,
            'mensagem' => 'Usuários encontrados!!',
            'users' => $users
        ];
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {

    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(UserCreateRequest $request)
    {
        $data = $request->validated();

        $user = User::create([
            'name' => $data['name'],
            'email' => $data['email'],
            'password' => bcrypt($data['password']),
        ]);

        return [
            'status' => 201, // 201 Created
            'mensagem' => 'Usuário cadastrado com sucesso!!',
            'user' => $user
        ];
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        $user = User::select('id', 'name', 'email')->find($id);

        if (!$user) {
            return [
                'status' => 404,
                'mensagem' => 'Usuário não encontrado!!'
            ];
        }

        return [
            'status' => 200,
            'mensagem' => 'Usuário encontrado!!',
            'user' => $user
        ];
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {

    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $user = User::find($id);

        if (!$user) {
            return [
                'status' => 404,
                'mensagem' => 'Usuário não encontrado!!'
            ];
        }

        $data = $request->validate([
            'name' => 'sometimes|required|string|max:255',
            'email' => 'sometimes|required|email|unique:users,email,' . $id,
            'password' => 'sometimes|required|string|min:6',
        ]);

        if (isset($data['password'])) {
            $data['password'] = bcrypt($data['password']);
        }

        $user->update($data);

        return [
            'status' => 200,
            'mensagem' => 'Usuário atualizado com sucesso!!',
            'user' => $user
        ];
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $user = User::find($id);

        if (!$user) {
            return [
                'status' => 404,
                'mensagem' => 'Usuário não encontrado!!'
            ];
        }

        $user->delete();

        return [
            'status' => 200,
            'mensagem' => 'Usuário deletado com sucesso!!'
        ];
    }
}
