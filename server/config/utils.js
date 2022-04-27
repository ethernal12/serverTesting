exports.db_default_options = () => {
	return {
		freezeTableName: true,
		underscored: true,
		timestamps: true,
		createdAt: 'created_at',
		updatedAt: 'updated_at',
		deletedAt: 'deleted_at'
	}
}